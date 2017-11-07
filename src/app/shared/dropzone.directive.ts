import {
    Directive,
    Input,
    ViewChild,
    ElementRef,
    AfterViewInit,
    EventEmitter,
    Output,
    HostListener,
} from '@angular/core';
import { AppSettings } from '../app-settings';



import { environment } from '../../environments/environment';
import { StoragePrepareBookModel } from '../models/storage-prepare-book-model';
import { StoragePrepareCoverModel } from '../models/storage-prepare-cover-model';
import { BookModel } from '../models/book';
import { ApiService } from '../services/api.service';
declare var Dropzone: any;

@Directive({
  selector: '[dropzone]',
})
export class DropzoneDirective {
  @Output() bookCover: EventEmitter<any> = new EventEmitter();
  @Input() storageId?: string = 'quietthyme';
  @Input() book?: BookModel;
  @Input() acceptedFiles?: string = AppSettings.SUPPORTED_BOOK_TYPES.join(',');
  @Input() maxFiles?: number;
  @Input() uploadType?: string = "book";

  signedCredData = {};

  handler: any;

  elt: ElementRef;
  constructor(_elt: ElementRef, private apiService: ApiService) {
    this.elt = _elt;
      var key = this.getSignedCredKey()
    this.signedCredData[key] = this.getSignedData(this.storageId, this.uploadType)
  }

  getSignedCredKey(){
      return `${this.storageId}-${this.uploadType}`;
  }

  getSignedData(storageId, uploadType){
      if(uploadType == 'book'){
        var bookPrepareData = new StoragePrepareBookModel();
        bookPrepareData.storage_id = storageId;
        return this.apiService.storagePrepareBook(bookPrepareData)
      }
      else if(uploadType == 'cover'){
          var coverPrepareData = new StoragePrepareCoverModel();
          coverPrepareData.book_id = this.book.id;
          coverPrepareData.filename = 'cover-'+ (new Date()).getTime(); //upload with timestamp for cache busting.
          coverPrepareData.format = '.jpg';
          return this.apiService.storagePrepareCover(coverPrepareData);
      }
  }

    ngOnChanges(changes) {
        console.log("CHANGES:", changes);

        var key = this.getSignedCredKey()
        if(!this.signedCredData[key]){
            this.signedCredData[key] = this.getSignedData(this.storageId,this.uploadType)
        }
    }



  ngAfterViewInit() {
    var self = this;

    var myDropzone = new Dropzone(self.elt.nativeElement,
        {
          url: `https://s3.amazonaws.com/placeholder`,
          paramName: "file",
          maxThumbnailFilesize: 5,
          maxFiles: self.maxFiles ? self.maxFiles : null,
          uploadMultiple: false,
          // headers: {"Accept": "text/plain"},
          // In the `accept` function we request a signed upload URL when a file being accepted
          acceptedFiles: self.acceptedFiles,
            accept: function(file, done){
                var filename_parts =  file.name.split(".");
                if(filename_parts.length == 1){
                    done('Invalid file name')
                }

                console.log("Added book filename", file)

                // TODO: we can do some "insecure" clientside validation here for filetype and storage size.
                // var extension = `.${filename_parts.pop()}`;
                // var filename = filename_parts.join('.');

                // var prepareData = new StoragePrepareBookModel();
                // prepareData.storage_id = self.storageId;
                // prepareData.storage_size = file.size;
                // prepareData.storage_filename = filename;
                // prepareData.storage_format = extension;

                console.log("Storage Destination data:");

                self.signedCredData[self.getSignedCredKey()]
                    .subscribe(
                        data => {
                            try{
                                // do a deep copy of the subscribe data.
                                var respData = JSON.parse(JSON.stringify(data))
                                if(self.uploadType == 'cover'){
                                    respData.fields.key = respData.fields.key;
                                } else{
                                    respData.fields.key = respData.fields.key + file.name;
                                }
                                file.signedFormFields = respData.fields;
                                file.upload_url = respData.url; // url has a trailing suffix.
                                done()
                            }
                            catch(e){
                                done(e)
                            }

                        },
                        error => {
                            console.log("An error occured", error)
                            done(error);
                        }
                    );
            },
            sending: function(file, xhr, formData){
                var signedFields = file.signedFormFields;
                console.log("Retrieving signed fields", signedFields)
                for (let key in signedFields){
                    console.log(key, signedFields[key])

                    formData.append(key, signedFields[key])
                }
            }

        }
    );
    // Set signed upload URL for each file being processing
    myDropzone.on('processing', (file) => {
        console.log("procesing event", file)
        myDropzone.options.url = file.upload_url
    })

    // myDropzone.on('success', (resp) => {
    //   console.log("success event", resp)
    // })

      myDropzone.on('complete', (resp) => {
          console.log("complete event", resp)
          self.bookCover.emit(`${resp.signedFormFields.bucket}/${resp.signedFormFields.key}`)
      })

      // myDropzone.on('canceled', (resp) => {
      //     console.log("canceled event", resp)
      // })
      //
      // myDropzone.on('error', (resp) => {
      //     console.log("error event", resp)
      // })
  }

  // @HostListener('click', ['$event'])
  // onClick(event: Event) {
  //   this.handler.open({
  //     name: 'QuietThyme',
  //     description: this.planName,
  //     amount: this.planCost,
  //     panelLabel: 'Subscribe',
  //     email: this.apiService.tokenPayload().email,
  //   });
  //   event.preventDefault();
  // }
}

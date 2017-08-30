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
import { ApiService } from '../services/api.service';
declare var Dropzone: any;

@Directive({
  selector: '[dropzone]',
})
export class DropzoneDirective {
  @Output() onCheckout: EventEmitter<any> = new EventEmitter();
  @Input() storageId: string;

  signedCredData = {};


  acceptedFiles = AppSettings.SUPPORTED_BOOK_TYPES.join(',');
  handler: any;

  elt: ElementRef;
  constructor(_elt: ElementRef, private apiService: ApiService) {
    this.elt = _elt;
      var prepareData = new StoragePrepareBookModel();
      prepareData.storage_id = 'quietthyme'
      this.signedCredData['quietthyme'] = this.apiService.storagePrepareBook(prepareData)
  }

    ngOnChanges(changes) {
        console.log(changes);

        if(!this.signedCredData[this.storageId]){
            var prepareData = new StoragePrepareBookModel();
            prepareData.storage_id = this.storageId
            this.signedCredData[this.storageId] = this.apiService.storagePrepareBook(prepareData)
        }
    }



  ngAfterViewInit() {
    var self = this;

    var myDropzone = new Dropzone(self.elt.nativeElement,
        {
          url: `https://s3.amazonaws.com/placeholder`,
          paramName: "file",
          maxThumbnailFilesize: 5,
          // uploadMultiple: false,
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

                self.signedCredData[self.storageId]
                    .subscribe(
                        data => {
                            // do a deep copy of the subscribe data.
                            var respData = JSON.parse(JSON.stringify(data))

                            respData.fields.key = respData.fields.key + file.name;
                            file.signedFormFields = respData.fields;
                            file.upload_url = respData.url; // url has a trailing suffix.
                            done()
                        },
                        error => {
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
      myDropzone.options.url = file.upload_url
    })

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

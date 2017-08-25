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

  acceptedFiles = AppSettings.SUPPORTED_BOOK_TYPES.join(',');
  handler: any;

  elt: ElementRef;
  constructor(_elt: ElementRef, private apiService: ApiService) {
    this.elt = _elt;
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

                var extension = `.${filename_parts.pop()}`;
                var filename = filename_parts.join('.');

                var prepareData = new StoragePrepareBookModel();
                prepareData.storage_size = file.size;
                prepareData.storage_filename = filename;
                prepareData.storage_format = extension;
                prepareData.storage_id = self.storageId;

                console.log("Storage Destination data:", prepareData);

                self.apiService.storagePrepareBook(prepareData)
                    .subscribe(
                        data => {
                            console.log("THIS IS THE RESPONSE DATA")
                            console.log(data)
                            file.signedFormFields = data['upload_url']['fields']
                            file.uploadURL = data['upload_url']['url']
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

                // var _send = xhr.send;
                // xhr.send = function() {
                //     _send.call(xhr, file);
                // };
            }

        }
    );
    // Set signed upload URL for each file being processing
    myDropzone.on('processing', (file) => {
      myDropzone.options.url = file.uploadURL
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

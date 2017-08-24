import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { StorageStatus } from '../../models/storage-status'
import { AppSettings } from '../../app-settings';

@Component({
  selector: 'quietthyme-book-upload',
  templateUrl: './book-upload.component.html',
  styleUrls: ['./book-upload.component.less']
})
export class BookUploadComponent implements OnInit {

  public connected: StorageStatus[] = [];
  storageDetails = AppSettings.STORAGE_DETAILS;
  storageId = "quietthyme"
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }
  public closeModalBookUpload(e){
    this.bsModalRef.hide()
  }
}

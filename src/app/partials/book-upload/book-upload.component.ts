import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'quietthyme-book-upload',
  templateUrl: './book-upload.component.html',
  styleUrls: ['./book-upload.component.less']
})
export class BookUploadComponent implements OnInit {

  public title: string;
  public list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }
  public closeModalBookUpload(e){
    this.bsModalRef.hide()
  }
}

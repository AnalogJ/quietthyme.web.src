import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BookModel } from '../../models/book';
import { AppSettings } from '../../app-settings';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'quietthyme-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.less']
})
export class BookDeleteComponent implements OnInit {

  public book: BookModel = new BookModel();
  storageDetails = AppSettings.STORAGE_DETAILS;
  loading = {
    delete: false,
  }
  constructor(public bsModalRef: BsModalRef, private apiService: ApiService,private router: Router) {}

  ngOnInit() {
  }
  public closeModalBookDelete(e){
    if(this.loading.delete){
      return;
    }
    this.bsModalRef.hide()
  }


  deleteBook() {
    console.log("deleting book", this.book.id);
    if (this.loading.delete) {
      return; //dont do anything if we're already downloading this book.
    }

    this.loading.delete = true;
    this.apiService
        .bookDestroy(this.book.id)
        .finally(() => {
          this.loading.delete = false;
        })
        .subscribe(
            response => {
              console.log('deleted book')
              this.bsModalRef.hide()
              this.router.navigate(['/library']);

            },
            error => {
              // this.notificationService.error('An error occurred!', error);
            }
        );
  }
}

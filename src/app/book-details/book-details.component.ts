import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BookModel } from '../models/book';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NotificationService } from '../services/notification.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BookDeleteComponent } from '../partials/book-delete/book-delete.component';

import * as FileSaver from 'file-saver';
declare var ga: any;

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less'],
})
export class BookDetailsComponent implements OnInit {
  book: BookModel = new BookModel();
  loading = {
    delete: false,
    info: false,
    download: false,
  };
  bsModalRef: BsModalRef;
  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) {
      this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
              ga('set', 'page', event.urlAfterRedirects);
              ga('send', 'pageview');
          }
      });
  }

  ngOnInit() {
    this.slimLoadingBarService.start();
    this.loading.info = true;
    this.apiService
      .book(this.activatedRoute.snapshot.params['bookId'])
      .finally(() => {
        this.loading.info = false;
        this.slimLoadingBarService.complete();
      })
      .subscribe(
        book => {
          console.log(book);
          this.book = book;
        },
        error => {
          this.notificationService.error('An error occurred!', error);
        }
      );
  }

  downloadBook() {
    console.log(this.book.id);
    if (this.loading.download) {
      return; //dont do anything if we're already downloading this book.
    }

    this.loading.download = true;
    this.slimLoadingBarService.start();
    this.apiService
      .download(this.book.id)
      .finally(() => {
        this.loading.download = false;
        this.slimLoadingBarService.complete();
      })
      .subscribe(
        response => {
          var filename = this.book.storage_filename + this.book.storage_format;
          let file = response.blob();
          console.log(
            file.size + ' bytes file downloaded. File type: ',
            file.type
          );
          FileSaver.saveAs(file, filename);
        },
        error => {
          this.notificationService.error('An error occurred!', error);
        }
      );
  }

    public openModalBookDelete() {

        this.bsModalRef = this.modalService.show(BookDeleteComponent, {
            animated: true,
            backdrop: 'static',
            class: 'modal-container modal-active',
        });
        this.bsModalRef.content.book = this.book

    }
}

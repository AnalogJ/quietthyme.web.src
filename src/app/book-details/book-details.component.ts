import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BookModel } from '../models/book';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NotificationService } from '../services/notification.service';
import { AnalyticsService } from '../services/analytics.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BookDeleteComponent } from '../partials/book-delete/book-delete.component';

import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less'],
})
export class BookDetailsComponent implements OnInit {
  book: BookModel = new BookModel();
  updateBook: any = {};
  loading = {
    delete: false,
    info: false,
    download: false,
    edit: false
  };
  editing: boolean = false
  bsModalRef: BsModalRef;
  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private analyticsService: AnalyticsService

  ) {
      this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
              this.analyticsService.visitPage(event.urlAfterRedirects);
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
    addAuthor(){
        this.updateBook.authors.push("");
    }

    editBook(){
        if(!this.editing){
            this.editing = true
            this.updateBook = JSON.parse(JSON.stringify(this.book)) //deep copy
            this.updateBook.isbn = this.updateBook.isbn || this.updateBook.isbn10;
        }
        return
    }

    saveBook(){
        if (this.loading.edit) {
            return; //dont do anything if we're already saving this book.
        }

        this.loading.edit = true;
        this.slimLoadingBarService.start();



        this.apiService
            .bookEdit(this.book.id, this.updateBook)
            .finally(() => {
                this.loading.edit = false;
                this.slimLoadingBarService.complete();
            })
            .subscribe(
                response => {
                    console.log('successfully edited book');
                    this.book = response
                    this.editing = false
                },
                error => {
                    this.notificationService.error('An error occurred!', error);
                }
            );
    }

    updateBookCover(key){
        this.updateBook.cover = key
    }

    cancelEdit(){
        this.editing = false

        //todo delete any uploaded book cover that doesnt get saved.
    }

    trackByIndex(index: number, value: number) {
        // console.log("TRACK BY INDEX CALLED", index)
        return index;
    }
}

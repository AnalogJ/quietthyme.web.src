import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BookModel } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NotificationService } from '../services/notification.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less'],
})
export class BookDetailsComponent implements OnInit {
  book: BookModel;
  loading = {
    info: false,
    download: false,
  };

  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

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
          this.notificationService.show('An error occurred!', error);
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
          this.notificationService.show('An error occurred!', error);
        }
      );
  }
}

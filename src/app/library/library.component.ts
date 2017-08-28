import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { BookModel } from '../models/book';
import { StorageStatus } from '../models/storage-status';
import { NotificationService } from '../services/notification.service';
import { BookUploadComponent } from '../partials/book-upload/book-upload.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';
import { ScrollSpyAffixModule } from 'ng2-scrollspy/dist/plugin/affix';
import * as FileSaver from 'file-saver';
import { AppSettings } from '../app-settings';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
declare var ga: any;

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less'],
})
export class LibraryComponent implements AfterViewInit {
    bookList: BookModel[] = [];
  bookListAll: boolean = false;
  loading = {
    list: false,
    download: {},
    status: false,
  };
  filter = {
    sort: null,
    storage: null,
    storage_id: null,
    page: '',
  };
  connected: StorageStatus[] = [];
    storageDetails = AppSettings.STORAGE_DETAILS;


  bsModalRef: BsModalRef;
  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private scrollSpyService: ScrollSpyService,
    private modalService: BsModalService,
    private router: Router
  ) {
      this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
              ga('set', 'page', event.urlAfterRedirects);
              ga('send', 'pageview');
          }
      });
  }

  ngAfterViewInit() {
    // this.getBookList();
    this.getStorage();

    // this.scrollSpyService.getObservable('sidebar').subscribe((e: any) => {
    //     console.log('ScrollSpy::sidebar: ', e);
    // });
  }
    initStorageStatus(){
        this.connected = [
            {
                free_space: 0,
                total_space: 0,
                prefix: 'quietthyme://',
                device_name: 'quietthyme',
                storage_id: 'quietthyme',
                storage_type: 'quietthyme',
                location_code: 'main',
            },
        ];
    }

  onScroll() {
    console.log('SCROLLING');
    this.getBookList();
  }

  getStorage() {
    var self = this;
    this.loading.status = true;
    this.slimLoadingBarService.start();
    this.apiService
      .storageStatus()
      .finally(() => {
        this.loading.status = false;
        this.slimLoadingBarService.complete();
      })
      .subscribe(
        response => {
          console.log(response);
            this.initStorageStatus()
            this.connected = this.connected.concat(response);
        },
        error => {
          this.notificationService.show('An error occurred!', error);
        }
      );
  }
  getBookList() {
    if (this.loading.list || this.bookListAll) {
      console.log('List is already loading, or all books retrieved already. ');
      return;
    }
    this.loading.list = true;
    this.slimLoadingBarService.start();
    this.apiService
      .bookList(this.filter)
      .finally(() => {
        this.loading.list = false;
        this.slimLoadingBarService.complete();
      })
      .subscribe(
        book_data => {
          console.log(book_data);
          this.bookList = this.bookList.concat(book_data.Items);
          this.filter.page = book_data.LastEvaluatedKey;

          if (book_data.LastEvaluatedKey == '') {
            //no more books to load:
            this.bookListAll = true;
          }
          // .map(function(book){
          //     book.cover = encodeURI(book.cover).replace(/%20/g, '+')
          //     return book
          // })
        },
        error => {
          this.notificationService.show('An error occurred!', error);
        }
      );
  }

  downloadBook(book) {
    console.log(book.id);
    if (this.loading.download[book.id]) {
      return; //dont do anything if we're already downloading this book.
    }

    this.loading.download[book.id] = true;
    this.slimLoadingBarService.start();
    this.apiService
      .download(book.id)
      .finally(() => {
        this.loading.download[book.id] = false;
        this.slimLoadingBarService.complete();
      })
      .subscribe(
        response => {
          var filename = book.storage_filename + book.storage_format;
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

  setStorage(storageStatus) {
    if (storageStatus == this.filter.storage) return; //user clicked an active filter
    this.filter.storage = storageStatus || null;
    this.filter.storage_id = storageStatus != null
      ? storageStatus.storage_id
      : null;
    this.filter.page = '';

    console.log('CHANGED STORAGE FILTER', this.filter.storage);
    this.bookListAll = false;
    this.bookList = [];
    this.getBookList();
  }
  setSort(sort) {
    if (sort == this.filter.sort) return; //user clicked an active filter

    this.filter.sort = sort || null;
    this.filter.page = '';
    console.log('CHANGED SORT FILTER', this.filter.sort);
    this.bookListAll = false;
    this.bookList = [];
    this.getBookList();
  }

  public openModalBookUpload() {

    this.bsModalRef = this.modalService.show(BookUploadComponent, {
      animated: true,
      backdrop: 'static',
      class: 'modal-container modal-active',
    });
    this.bsModalRef.content.connected = this.connected

  }
}

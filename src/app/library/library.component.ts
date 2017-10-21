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
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

      this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
              ga('set', 'page', event.urlAfterRedirects);
              ga('send', 'pageview');


              //the filter parameters in the url bar always take presidence over internal state
              //because the user may have bookmarked the page, or it was linked to the library with a filter.
              //so all filters just update the url query string, which bubbles an event, and kicks off a Clean getBookList
              //call
              Object.assign(this.filter, this.activatedRoute.snapshot.queryParams);
              this.getBookList(true);
          }
      });
  }

  ngAfterViewInit() {
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
    this.getBookList(); //when scrolling, dont reset the page info or current list.
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
          this.notificationService.error('An error occurred!', error);
        }
      );
  }

    private navigateToFilteredLibrary(filter){

        let filterClone = Object.assign({}, filter);
        //make sure we dont store page info in the browser history
        delete filterClone.page
        console.log("PUSHING STATE", filterClone)
        this.router.navigate(['.'], { queryParams: filterClone });
    }

  getBookList(reset?: boolean) {

    if(reset){
        this.bookListAll = false;
        this.bookList = [];
    }

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
          this.notificationService.error('An error occurred!', error);
        }
      );
  }



  setStorage(storageStatus) {

    var next_storage_id = storageStatus ? storageStatus.storage_id : null;
      if (next_storage_id == this.filter.storage_id) return; //user clicked an active filter
    this.filter.storage_id = next_storage_id
    this.filter.page = '';
      console.log("FILTER CONTENT", this.filter)
    this.navigateToFilteredLibrary(this.filter)
  }
  setSort(sort) {
    if (sort == this.filter.sort) return; //user clicked an active filter

    this.filter.sort = sort || null;
    this.filter.page = '';
    console.log('CHANGED SORT FILTER', this.filter.sort);

    this.navigateToFilteredLibrary(this.filter)

  }

  public openModalBookUpload() {

    this.bsModalRef = this.modalService.show(BookUploadComponent, {
      animated: true,
      backdrop: 'static',
      class: 'modal-container modal-active',
    });
    this.bsModalRef.content.connected = this.connected

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
                    this.notificationService.error('An error occurred!', error);
                }
            );
    }

  displayNameForStorageId(storage_id){

      var connectedStorageStatus = null
      for(let storageStatus of this.connected){
          if(storageStatus.storage_id == storage_id){
              connectedStorageStatus = storageStatus
              break;
          }
      }

      if(connectedStorageStatus){
          return this.storageDetails[connectedStorageStatus.storage_type].display_name
      }
      else {
          return this.storageDetails['quietthyme'].display_name
      }

  }
}

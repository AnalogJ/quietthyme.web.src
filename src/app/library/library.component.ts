import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { BookModel } from '../models/book'
import { NotificationService } from '../services/notification.service';
import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';
import {ScrollSpyAffixModule} from "ng2-scrollspy/dist/plugin/affix";
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements AfterViewInit {
    bookList: BookModel[] = [];
    bookListAll: boolean = false;
    loading = {
        list: false,
        download: {},
        status: false
    }
    filter = {
        sort: null,
        storage: null,
        storage_id: null,
        page: ''
    }
    connected: any = {
        quietthyme: false,
        dropbox: false,
        gdrive: false,
        skydrive: false,
        box: false
    }
    storages: any = {}
  constructor(private slimLoadingBarService: SlimLoadingBarService,
              private notificationService: NotificationService,
              private apiService: ApiService,
              private scrollSpyService: ScrollSpyService) { }

    ngAfterViewInit() {
        // this.getBookList();
        this.getStorage();

        // this.scrollSpyService.getObservable('sidebar').subscribe((e: any) => {
        //     console.log('ScrollSpy::sidebar: ', e);
        // });
    }

    onScroll(){
        console.log("SCROLLING")
        this.getBookList()
    }

    getStorage(){
        var self = this;
        this.loading.status = true
        this.slimLoadingBarService.start()
        this.apiService.storageStatus()
            .finally(() => {
                this.loading.status = false;
                this.slimLoadingBarService.complete();
            })
            .subscribe(
                response => {
                    console.log(response)
                    response.forEach(function(status){
                        self.connected[status.storage_type] = true

                        self.storages[status.storage_type] = status
                    })
                },
                error => {this.notificationService.show("An error occurred!", error)}

            );
    }
  getBookList(){
      if(this.loading.list || this.bookListAll){
          console.log("List is already loading, or all books retrieved already. ");
          return;
      }
      this.loading.list = true
      this.slimLoadingBarService.start()
      this.apiService.bookList(this.filter)
          .finally(() => {
              this.loading.list = false
              this.slimLoadingBarService.complete();
          })
          .subscribe(
              book_data => {
                  console.log(book_data)
                  this.bookList = this.bookList.concat(book_data.Items);
                  this.filter.page = book_data.LastEvaluatedKey;

                  if(book_data.LastEvaluatedKey == "") {
                      //no more books to load:
                      this.bookListAll = true;
                  }
                  // .map(function(book){
                  //     book.cover = encodeURI(book.cover).replace(/%20/g, '+')
                  //     return book
                  // })
              },
              error => {this.notificationService.show("An error occurred!", error)}

          );
  }

  downloadBook(book){
        console.log(book.id)
      if(this.loading.download[book.id]){
          return //dont do anything if we're already downloading this book.
      }

      this.loading.download[book.id] = true
      this.slimLoadingBarService.start()
      this.apiService.download(book.id)
          .finally(() => {
              this.loading.download[book.id] = false
              this.slimLoadingBarService.complete();
          })
          .subscribe(
              response => {
                  var filename = book.storage_filename +book.storage_format;
                  let file = response.blob();
                  console.log(file.size + " bytes file downloaded. File type: ", file.type);
                  FileSaver.saveAs(file, filename);
              },
              error => {this.notificationService.show("An error occurred!", error)}
          );
  }

    setStorage(storage){
        if(storage == this.filter.storage) return; //user clicked an active filter
        this.filter.storage = storage || null;
        this.filter.storage_id = this.storages[storage] ? this.storages[storage].storage_id : null;
        this.filter.page = ''

        console.log("CHANGED STORAGE FILTER", this.filter.storage)
        this.bookList = []
        this.getBookList()
    }
    setSort(sort){
        if(sort == this.filter.sort) return; //user clicked an active filter

        this.filter.sort = sort || null
        this.filter.page = ''
        console.log("CHANGED SORT FILTER", this.filter.sort)
        this.bookList = []
        this.getBookList()
    }

}

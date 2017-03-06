import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { BookModel } from '../models/book'
import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';
import {ScrollSpyAffixModule} from "ng2-scrollspy/dist/plugin/affix";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements AfterViewInit {
    bookList: BookModel[] = []
    loading = {
        list: false,
        download: false,
        status: false
    }
    filter = {
        sort: null,
        storage: null,
        storage_id: null,
        page: '0'
    }
    connected: any = {
        quietthyme: false,
        dropbox: false,
        gdrive: false,
        skydrive: false,
        box: false
    }
    storages: any = {}
  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService, private scrollSpyService: ScrollSpyService) { }

    ngAfterViewInit() {
        this.getBookList();
        this.getStorage();

        // this.scrollSpyService.getObservable('sidebar').subscribe((e: any) => {
        //     console.log('ScrollSpy::sidebar: ', e);
        // });
    }

    getStorage(){
        var self = this;
        this.loading.list = true
        this.slimLoadingBarService.start()
        this.apiService.storageStatus()
            .subscribe(
                response => {
                    console.log(response)
                    response.forEach(function(status){
                        self.connected[status.storage_type] = true

                        self.storages[status.storage_type] = status
                    })
                },
                error => {console.log(error)},
                () => {
                    this.loading.status = false
                    this.slimLoadingBarService.complete();
                }
            );
    }
  getBookList(){
      this.loading.list = true
      this.slimLoadingBarService.start()
      this.apiService.bookList(this.filter)
          .subscribe(
              books => {
                  console.log(books)
                  this.bookList = books
                  // .map(function(book){
                  //     book.cover = encodeURI(book.cover).replace(/%20/g, '+')
                  //     return book
                  // })
              },
              error => {console.log(error)},
              () => {
                  this.loading.list = false
                  this.slimLoadingBarService.complete();
              }
          );
  }

  downloadBook(bookId){
        console.log(bookId)

      this.loading.download = true
      this.slimLoadingBarService.start()
      this.apiService.download(bookId)
          .subscribe(
              book => {
                  console.log(book)
                  // .map(function(book){
                  //     book.cover = encodeURI(book.cover).replace(/%20/g, '+')
                  //     return book
                  // })
              },
              error => {console.log(error)},
              () => {
                  this.loading.download = false
                  this.slimLoadingBarService.complete();
              }
          );
  }

    setStorage(storage){
        if(storage == this.filter.storage) return; //user clicked an active filter
        this.filter.storage = storage || null;
        this.filter.storage_id = this.storages[storage] ? this.storages[storage].storage_id : null;
        this.filter.page = '0'

        console.log("CHANGED STORAGE FILTER", this.filter.storage)
        this.bookList = []
        this.getBookList()
    }
    setSort(sort){
        if(sort == this.filter.sort) return; //user clicked an active filter

        this.filter.sort = sort || null
        this.filter.page = '0'
        console.log("CHANGED SORT FILTER", this.filter.sort)
        this.bookList = []
        this.getBookList()
    }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { BookModel } from '../models/book'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {
    bookList: BookModel[] = []
    loading = {
        list: false,
        download: false
    }

  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService) { }

  ngOnInit() {
      this.loading.list = true
      this.slimLoadingBarService.start()
    this.apiService.bookList()
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

}

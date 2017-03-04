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
    loading: boolean = true;

  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService) { }

  ngOnInit() {
      this.loading = true
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
                this.loading = false
                this.slimLoadingBarService.complete();
            }
        );
  }

}

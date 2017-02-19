import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BookModel } from '../models/book'
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {
bookList: BookModel[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.bookList()
        .subscribe(
            books => {
              console.log(books)
              this.bookList = books
            },
            error => {console.log(error)}
        );
  }

}

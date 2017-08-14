import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BookModel } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {

    book: BookModel
    loading = {
        download: false
    }


  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.book(this.activatedRoute.snapshot.params['bookId'])
        .subscribe(
            book => {
              console.log(book)
              this.book = book
            },
            error => {console.log(error)}
        );
  }

    downloadBook(){
        console.log(this.book.id)
        if(this.loading.download){
            return //dont do anything if we're already downloading this book.
        }

        this.loading.download = true
        this.slimLoadingBarService.start()
        this.apiService.download(this.book.id)
            .subscribe(
                response => {
                    var filename = this.book.storage_filename +this.book.storage_format;
                    let file = response.blob();
                    console.log(file.size + " bytes file downloaded. File type: ", file.type);
                    FileSaver.saveAs(file, filename);
                },
                error => {console.log(error)},
                () => {
                    this.loading.download = false
                    this.slimLoadingBarService.complete();
                }
            );
    }

}

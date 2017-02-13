import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.less']
})
export class StorageComponent implements OnInit {



  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.apiService.storageStatus()
          .subscribe(
              settings => {
                  console.log(settings)
              },
              error => {console.log(error)}
          );
  }

  kloudlessAuthenticatedStorage(kloudlessData){
    console.log(kloudlessData)

    this.apiService.storageLink(kloudlessData)
        .subscribe(
            data => {
              console.log(data)
            },
            error => {console.log(error)}
        );

  }

}

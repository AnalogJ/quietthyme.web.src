import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.less']
})
export class StorageComponent implements OnInit {
    connected: any = {
        quietthyme: false,
        dropbox: false,
        gdrive: false,
        skydrive: false,
        box: false
    }

    statuses: any = {}
    loading = {
        status: false,
        link: false
    };

  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService) { }

  ngOnInit() {
      this.loading.status = true;
      this.slimLoadingBarService.start()
      var self = this;

      this.apiService.storageStatus()
          .subscribe(
              response => {
                  console.log(response)
                  response.forEach(function(status){
                      self.connected[status.storage_type] = true

                      self.statuses[status.storage_type] = status
                  })
              },
              error => {console.log(error)},
              () => {
                  this.loading.status = false
                  this.slimLoadingBarService.complete();
              }
          );
  }

  kloudlessAuthenticatedStorage(kloudlessData){
    console.log(kloudlessData)

    if(this.loading.link) return;
    this.slimLoadingBarService.start()

    this.apiService.storageLink(kloudlessData)
    .subscribe(
        data => {
          console.log(data)
        },
        error => {console.log(error)},
        () => {
            this.loading.status = false
            this.slimLoadingBarService.complete();
        }
    );

  }

}

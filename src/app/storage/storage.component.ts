import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {StorageStatus} from '../models/storage-status'
import {AppSettings} from '../app-settings';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.less']
})
export class StorageComponent implements OnInit {
    kloudlessStorageTypes: string[] = AppSettings.KLOUDLESS_STORAGE_TYPES;
    connected: StorageStatus[] = [{
        free_space: 0,
        total_space: 0,
        prefix: "quietthyme://",
        device_name: "quietthyme",
        storage_id: "quietthyme",
        storage_type: "quietthyme",
        location_code: "main"
    }]

    loading = {
        status: false,
        link: false
    };


  constructor(private slimLoadingBarService: SlimLoadingBarService, private notificationService: NotificationService, private apiService: ApiService) { }

  ngOnInit() {
      this.loading.status = true;
      this.slimLoadingBarService.start()
      var self = this;
      this.apiService.storageStatus()
          .finally(() => {
              this.loading.status = false
              this.slimLoadingBarService.complete();
          })
          .subscribe(
              response => {
                  console.log(response)
                  this.connected = this.connected.concat(response)
                  for(let storage of response){
                      //update the kloudlessStorageTypes array (remove any connected services)
                      var kndx = this.kloudlessStorageTypes.indexOf(storage.storage_type, 0);
                      if (kndx > -1) {
                          console.log("removed: " + storage.storage_type)
                          this.kloudlessStorageTypes.splice(kndx, 1);
                      }
                  }

                  console.log("connected:", this.connected)
              },
              error => {this.notificationService.show("An error occurred!", error)}

          );
  }

  kloudlessAuthenticatedStorage(kloudlessData){
    console.log(kloudlessData)

    if(this.loading.link) return;
    this.slimLoadingBarService.start()

    this.apiService.storageLink(kloudlessData)
        .finally(() => {
            this.loading.status = false
            this.slimLoadingBarService.complete();
        })
        .subscribe(
            data => {
              console.log(data)
            },
            error => {this.notificationService.show("An error occurred!", error)}
        );

  }

}

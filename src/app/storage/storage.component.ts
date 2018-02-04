import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { StorageStatus } from '../models/storage-status';
import { AppSettings } from '../app-settings';
import { NotificationService } from '../services/notification.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from '../services/analytics.service';


@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.less'],
})
export class StorageComponent implements OnInit {
  kloudlessStorageTypes: string[] = AppSettings.KLOUDLESS_STORAGE_TYPES; //contains a list of all the storage types that are unconnected.
  connected: StorageStatus[] = []; //contains a list of all the connected storage provider data.

  loading = {
    status: false,
    link: false,
  };

  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private router: Router,
    private analyticsService: AnalyticsService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.visitPage(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit() {
    this.initStorageStatus()
    this.getStorageStatus()
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

  getStorageStatus() {
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
          for (let storage of response) {
            //update the kloudlessStorageTypes array (remove any connected services)
            var kndx = this.kloudlessStorageTypes.indexOf(
              storage.storage_type,
              0
            );
            if (kndx > -1) {
              console.log('removed: ' + storage.storage_type);
              this.kloudlessStorageTypes.splice(kndx, 1);
            }
          }

          console.log('connected:', this.connected);
        },
        error => {
          this.notificationService.error('An error occurred!', error);
        }
      );
  }

  kloudlessAuthenticatedStorage(kloudlessData) {
    console.log(kloudlessData);

    if (this.loading.link) return;
    this.slimLoadingBarService.start();

    this.apiService
      .storageLink(kloudlessData)
      .finally(() => {
        this.loading.status = false;
        this.slimLoadingBarService.complete();
      })
      .subscribe(
        data => {
          console.log("Connected a new storage.")
          console.log(data);

          this.connected.push(data);

          //update the kloudlessStorageTypes array (remove any connected services)
          var kndx = this.kloudlessStorageTypes.indexOf(
              data.storage_type,
              0
          );
          if (kndx > -1) {
            console.log('removed: ' + data.storage_type);
            this.kloudlessStorageTypes.splice(kndx, 1);
          }

        },
        error => {
          this.notificationService.error('An error occurred!', error);
        }
      );
  }
  kloudlessStorageDetached(detachedStorageStatus){
    console.log("Storage Detached: " + detachedStorageStatus.storage_type)


    //update the kloudlessStorageTypes array (remove any connected services)
    var kndx = this.connected.indexOf(
        detachedStorageStatus,
        0
    );
    if (kndx > -1) {
      this.connected.splice(kndx, 1)
      this.kloudlessStorageTypes.push(detachedStorageStatus.storage_type);
    }

  }
}

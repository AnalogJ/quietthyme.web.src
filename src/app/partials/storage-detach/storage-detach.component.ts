import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { StorageStatus } from '../../models/storage-status';
import { AppSettings } from '../../app-settings';

@Component({
  selector: 'app-storage-detach',
  templateUrl: './storage-detach.component.html',
  styleUrls: ['./storage-detach.component.less']
})
export class StorageDetachComponent implements OnInit {
  storageData: StorageStatus = new StorageStatus();
  storageDetails = AppSettings.STORAGE_DETAILS;
  deleteStorage: boolean = false; //determines if we should delete the actual book files as well.
  loading = {
    detach: false
  };

  constructor(public bsModalRef: BsModalRef, private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  public closeModalStorageDetach(e){
    if(this.loading.detach){
      return;
    }
    this.bsModalRef.hide()
  }

  detachStorage() {
    console.log("detaching storage");
    console.log(this.deleteStorage)
    if (this.loading.detach) {
      return; //dont do anything if we're already deleting this storage provider.
    }

    this.loading.detach = true;
    this.apiService
        .storageDetach(this.storageData.storage_id, this.deleteStorage)
        .finally(() => {
          this.loading.detach = false;
        })
        .subscribe(
            response => {
              console.log('deleted book')
              this.bsModalRef.hide()
              //TODO bust the cache here, we've modified the credentials.
              this.router.navigate(['/storage']);

            },
            error => {
              // this.notificationService.error('An error occurred!', error);
            }
        );
  }
}

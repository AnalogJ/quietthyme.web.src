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
  deleteBooks: Boolean = false;
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
    console.log(this.deleteBooks)
    // if (this.loading.detach) {
    //   return; //dont do anything if we're already downloading this book.
    // }
    //
    // this.loading.delete = true;
    // this.apiService
    //     .bookDestroy(this.book.id)
    //     .finally(() => {
    //       this.loading.delete = false;
    //     })
    //     .subscribe(
    //         response => {
    //           console.log('deleted book')
    //           this.bsModalRef.hide()
    //           this.router.navigate(['/library']);
    //
    //         },
    //         error => {
    //           // this.notificationService.error('An error occurred!', error);
    //         }
    //     );
  }
}

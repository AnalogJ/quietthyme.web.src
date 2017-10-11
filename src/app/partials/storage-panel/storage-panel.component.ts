import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StorageStatus } from '../../models/storage-status';
import { AppSettings } from '../../app-settings';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { StorageDetachComponent } from '../storage-detach/storage-detach.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'quietthyme-storage-panel',
  templateUrl: './storage-panel.component.html',
  styleUrls: ['./storage-panel.component.less'],
})
export class StoragePanelComponent implements OnInit {
  @Input() storageData: StorageStatus;
  @Output() onStorageDetached: EventEmitter<any> = new EventEmitter();


  bsModalRef: BsModalRef;
  public subscriptions: Subscription[] = [];
  StorageDetails: any;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    console.log(this.storageData);
    this.StorageDetails = AppSettings.STORAGE_DETAILS;
  }

  public openModalStorageDetach() {

    //listen for the hide event on the modal. Then check if the storage has been detached.
    //if it has emit an event to the listener to remove the storage provider from the UI.
    this.subscriptions.push(this.modalService.onHide.subscribe((reason: string) => {
      if(this.bsModalRef.content.isStorageDetached){
        this.onStorageDetached.emit(this.storageData);
      }
    }));

    this.bsModalRef = this.modalService.show(StorageDetachComponent, {
      animated: true,
      backdrop: 'static',
      class: 'modal-container modal-active',
    });
    this.bsModalRef.content.storageData = this.storageData
  }

  public unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }



}

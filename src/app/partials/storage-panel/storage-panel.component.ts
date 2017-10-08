import { Component, OnInit, Input } from '@angular/core';
import { StorageStatus } from '../../models/storage-status';
import { AppSettings } from '../../app-settings';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { StorageDetachComponent } from '../storage-detach/storage-detach.component';

@Component({
  selector: 'quietthyme-storage-panel',
  templateUrl: './storage-panel.component.html',
  styleUrls: ['./storage-panel.component.less'],
})
export class StoragePanelComponent implements OnInit {
  @Input() storageData: StorageStatus;
  bsModalRef: BsModalRef;
  StorageDetails: any;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    console.log(this.storageData);
    this.StorageDetails = AppSettings.STORAGE_DETAILS;
  }

  public openModalStorageDetach() {
    this.bsModalRef = this.modalService.show(StorageDetachComponent, {
      animated: true,
      backdrop: 'static',
      class: 'modal-container modal-active',
    });
    this.bsModalRef.content.storageData = this.storageData
  }
}

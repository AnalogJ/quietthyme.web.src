import { Component, OnInit, Input } from '@angular/core';
import { StorageStatus } from '../../models/storage-status';
import { AppSettings } from '../../app-settings';

@Component({
  selector: 'quietthyme-storage-panel',
  templateUrl: './storage-panel.component.html',
  styleUrls: ['./storage-panel.component.less'],
})
export class StoragePanelComponent implements OnInit {
  @Input() storageData: StorageStatus;

  StorageDetails: any;

  constructor() {}

  ngOnInit() {
    console.log(this.storageData);
    this.StorageDetails = AppSettings.STORAGE_DETAILS;
  }
}

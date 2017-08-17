import { Component, OnInit, Input } from '@angular/core';
import {StorageStatus} from '../../models/storage-status'
@Component({
  selector: 'quietthyme-storage-panel',
  templateUrl: './storage-panel.component.html',
  styleUrls: ['./storage-panel.component.less']
})
export class StoragePanelComponent implements OnInit {
  @Input() storageData : StorageStatus;

  constructor() { }

  ngOnInit() {
    console.log(this.storageData)
  }
}

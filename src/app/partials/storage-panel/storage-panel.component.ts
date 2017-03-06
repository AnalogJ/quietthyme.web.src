import { Component, OnInit, Input } from '@angular/core';
import {StorageStatus} from '../../models/storage-status'
@Component({
  selector: 'quietthyme-storage-panel',
  templateUrl: './storage-panel.component.html',
  styleUrls: ['./storage-panel.component.less']
})
export class StoragePanelComponent implements OnInit {
  @Input() storageData : StorageStatus;
  @Input() storageType : string;

  public chartDatasets: any;

  public chartOptions: any;
  public chartColors: Array<any>

  public storageLogo: string

  constructor() { }

  ngOnInit() {
    console.log(this.storageData)
    this.resetComp()
  }

  ngOnChanges() {
    console.log("StorageDta changed!", this.storageData)
    this.resetComp()
  }

  resetComp(){
    // this.chartLabels =  ['Free', 'Used'] : ['Disconnected']
    // this.chartData =  [this.storageData.free_space, ] : [1]

    this.chartDatasets = this.storageData ?[{
      data: [300, 50],
      backgroundColor: [
        '#46BFBD', //free
        'lightgrey' //used
      ],
      hoverBackgroundColor: [
        '#5AD3D1', //free
        'red' //free
      ]
    }] : [{
      data: [1]
    }];

    this.chartOptions = {
      cutoutPercentage: this.storageData ? 83 : 87,
      tooltips: { enabled: false }
    };
    this.chartColors = this.storageData ? [
      { //free, used
        backgroundColor: ['#46BFBD','lightgrey'] ,
        hoverBackgroundColor: ['#5AD3D1', 'red']
      }

    ] : [{ //disconnected
      backgroundColor: ['lightgrey']
    }]
    this.storageLogo ='assets/images/services/' + this.storageType + '.png'
  }


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}

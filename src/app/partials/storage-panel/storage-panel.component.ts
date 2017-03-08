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



  //common component settings
  public chartOptions: any;
  public storageLogo: string

  //connected component settings
  public chartData: number[];
  public chartColors: any[] = [
  { //free, used
    backgroundColor: ['#128950','lightgrey'] ,
    hoverBackgroundColor: ['#18b66a', 'red']
  }

]

  //disconnected component settings
  public disconnectedData: number[] = [1]
  public disconnectedChartColors: any[] = [{
    backgroundColor: ['lightgrey']
  }]

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
    if(this.storageData){
      this.chartData = [this.storageData.free_space, this.storageData.total_space - this.storageData.free_space];
    }

    this.chartOptions = {
      cutoutPercentage: this.storageData ? 83 : 87,
      tooltips: { enabled: false }
    };

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

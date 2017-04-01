import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ng2-bootstrap';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit, AfterViewInit {
  userData: any = {}

  @ViewChild('settingsTabs') settingsTabs: TabsetComponent;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userData = this.apiService.tokenPayload()
  }
    ngAfterViewInit() {
        if(this.activatedRoute.snapshot.params['tab'] == 'plans' ){
            this.settingsTabs.tabs[1].active = true;
        }
    }

}

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ng2-bootstrap';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  userData: any = {}
    loading = {
        setPlan: false,
    };

  @ViewChild('settingsTabs') settingsTabs: TabsetComponent;

  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userData = this.apiService.tokenPayload()
  }
    ngAfterViewInit() {
        if(this.activatedRoute.snapshot.params['tab'] == 'plans' ){
            this.settingsTabs.tabs[1].active = true;
        }
    }

    stripeCheckoutCompleted(stripeCheckoutData){
        console.log(stripeCheckoutData)

        if(this.loading.setPlan) return;
        this.slimLoadingBarService.start()

        this.apiService.userPlan(stripeCheckoutData)
            .subscribe(
                data => {
                    console.log(data)
                },
                error => {console.log(error)},
                () => {
                    this.loading.setPlan = false
                    this.slimLoadingBarService.complete();
                }
            );

    }
}

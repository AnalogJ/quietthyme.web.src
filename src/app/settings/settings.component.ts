import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ng2-bootstrap';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
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

    stripeCheckoutCompleted(stripeCheckoutData){
        console.log(stripeCheckoutData)

        // if(this.loading.link) return;
        // this.slimLoadingBarService.start()
        //
        // this.apiService.storageLink(kloudlessData)
        //     .subscribe(
        //         data => {
        //             console.log(data)
        //         },
        //         error => {console.log(error)},
        //         () => {
        //             this.loading.status = false
        //             this.slimLoadingBarService.complete();
        //         }
        //     );

    }
}

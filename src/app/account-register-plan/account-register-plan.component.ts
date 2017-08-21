import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ApiService } from '../services/api.service';
import { UservoiceService } from '../services/uservoice.service';
import { NotificationService } from '../services/notification.service';

import { Router, ActivatedRoute } from '@angular/router';
declare var UserVoice:any;

@Component({
  selector: 'app-account-register-plan',
  templateUrl: './account-register-plan.component.html',
  styleUrls: ['./account-register-plan.component.less']
})
export class AccountRegisterPlanComponent implements OnInit {

  loading = {
    setPlan: false,
  };

  constructor(private slimLoadingBarService: SlimLoadingBarService,
              private uservoiceService: UservoiceService,
              private notificationService: NotificationService,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
  }

  stripeCheckoutCompleted(stripeCheckoutData){
    console.log(stripeCheckoutData)

    if(this.loading.setPlan) return;
    this.slimLoadingBarService.start()

    this.apiService.userPlan(stripeCheckoutData)
        .finally(() => {
            this.loading.setPlan = false
            this.slimLoadingBarService.complete();
        })
        .subscribe(
            data => {
              //TODO: we should update the Token here too.
              console.log(data)

              this.uservoiceService.identify();
              //redirect user to storage page
                this.router.navigate(['/storage'])
            },
            error => {this.notificationService.show("An error occurred!", error)}

        );

  }

}

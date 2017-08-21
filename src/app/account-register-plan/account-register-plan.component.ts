import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ApiService } from '../services/api.service';
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

  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  stripeCheckoutCompleted(stripeCheckoutData){
    console.log(stripeCheckoutData)

    if(this.loading.setPlan) return;
    this.slimLoadingBarService.start()

    this.apiService.userPlan(stripeCheckoutData)
        .subscribe(
            data => {
              //TODO: we should update the Token here too.
              console.log(data)

              var tokenPayload = this.apiService.tokenPayload()
              UserVoice.push(['identify', {
                email:      tokenPayload.email, // User’s email address
                name:       tokenPayload.name, // User’s real name
                //created_at: 1364406966, // Unix timestamp for the date the user signed up
                id:         tokenPayload.uid, // Optional: Unique id of the user (if set, this should not change)
                type:       tokenPayload.plan, // Optional: segment your users by type
                account: { // Account traits are only available on some plans
                  // id:           123, // Optional: associate multiple users with a single account
                  name:         tokenPayload.name, // Account name
                  // created_at:   1364406966, // Unix timestamp for the date the account was created
                  // monthly_rate: 9.99, // Decimal; monthly rate of the account
                  // ltv:          1495.00, // Decimal; lifetime value of the account
                  plan:         tokenPayload.plan // Plan name for the account
                }
              }]);
              //redirect user to storage page
                this.router.navigate(['/storage'])
            },
            error => {console.log(error)},
            () => {
              this.loading.setPlan = false
              this.slimLoadingBarService.complete();
            }
        );

  }

}

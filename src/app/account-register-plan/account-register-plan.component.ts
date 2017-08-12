import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-register-plan',
  templateUrl: './account-register-plan.component.html',
  styleUrls: ['./account-register-plan.component.less']
})
export class AccountRegisterPlanComponent implements OnInit {

  loading = {
    setPlan: false,
  };

  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

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
              //todo: redirect user to storage page
            },
            error => {console.log(error)},
            () => {
              this.loading.setPlan = false
              this.slimLoadingBarService.complete();
            }
        );

  }

}

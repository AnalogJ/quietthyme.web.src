import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
declare var UserVoice:any;

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.less']
})
export class AccountLoginComponent implements OnInit {
    loading = {
        login: false,
        oauth: true
    };
  loginEmail: string;
  loginPassword: string;

  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  login(){
    if(this.loading.login) return

    this.loading.login = true
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });
    this.apiService.authLogin(this.loginEmail, this.loginPassword)
        .subscribe(
            data => {
              localStorage.setItem('id_token', data.token); //set the JWT token

                //set UserVoice data
                // Identify the user and pass traits
                // To enable, replace sample data with actual user traits and uncomment the line

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

                if(this.activatedRoute.snapshot.params['requested']){
                    this.router.navigate([this.activatedRoute.snapshot.params['requested']])
                }
                else{
                    this.router.navigate(['/storage'])
                }
            },
            error => {console.log(error)},
            () => {
                this.loading.login = false
                this.slimLoadingBarService.complete();
            }

        );
  }

}

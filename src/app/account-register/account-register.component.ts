import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
declare var UserVoice:any;

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.less']
})
export class AccountRegisterComponent implements OnInit {
    loading = {
        register: false,
        oauth: false
    };
  regName: string;
  regEmail: string;
  regPassword: string;


  constructor(private slimLoadingBarService: SlimLoadingBarService, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  register(){

      if(this.loading.register) return

      this.loading.register = true
      this.slimLoadingBarService.start(() => {
          console.log('Loading complete');
      });

    this.apiService.authRegister(this.regName, this.regEmail, this.regPassword)
        .subscribe(
            data => {
              console.log(data)
              localStorage.setItem('id_token', data.token); //set the JWT token

                var tokenPayload = this.apiService.tokenPayload()
                UserVoice.push(['identify', {
                    email:      tokenPayload.email, // User’s email address
                    name:       tokenPayload.name, // User’s real name
                    //created_at: 1364406966, // Unix timestamp for the date the user signed up
                    id:         tokenPayload.catalog_token, // Optional: Unique id of the user (if set, this should not change)
                    type:       'none' // Optional: segment your users by type
                }]);


              this.router.navigate(['/register/plan'])
            },
            error => {console.log(error)},
            () => {
                this.loading.register = false
                this.slimLoadingBarService.complete();
            }

        );
  }
}

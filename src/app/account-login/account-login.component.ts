import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

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

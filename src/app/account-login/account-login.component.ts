import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.less']
})
export class AccountLoginComponent implements OnInit {

  loginEmail: string;
  loginPassword: string;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  login(){


    // this.loading.saveSettings = true;
    this.apiService.authLogin(this.loginEmail, this.loginPassword)
        .subscribe(
            data => {
              console.log(data)
              localStorage.setItem('id_token', data.token); //set the JWT token

                if(this.activatedRoute.snapshot.params['requested']){
                    this.router.navigate([this.activatedRoute.snapshot.params['requested']])
                }
                else{
                    this.router.navigate(['/storage'])
                }
            },
            error => {console.log(error)}
        );
  }

}

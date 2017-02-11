import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.less']
})
export class AccountRegisterComponent implements OnInit {

  regName: string;
  regEmail: string;
  regPassword: string;
  regConfirmPassword: string;

  loginEmail: string;
  loginPassword: string;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  register(){

    // this.loading.saveSettings = true;
    this.apiService.authRegister(this.regName, this.regEmail, this.regPassword)
        .subscribe(
            data => {
              console.log(data)
            },
            error => {console.log(error)}
        );
  }

  login(){
    
  }
}

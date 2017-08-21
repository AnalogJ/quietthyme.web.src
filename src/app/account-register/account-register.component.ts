import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UservoiceService } from '../services/uservoice.service';
import { NotificationService } from '../services/notification.service';
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
    errorMessage: string;


  constructor(private slimLoadingBarService: SlimLoadingBarService,
              private apiService: ApiService,
              private uservoiceService: UservoiceService,
              private notificationService: NotificationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  register(){

      if(this.loading.register) return

      this.loading.register = true
      this.slimLoadingBarService.start(() => {
          console.log('Loading complete');
      });

    this.apiService.authRegister(this.regName, this.regEmail, this.regPassword)
        .finally(() => {
            this.loading.register = false
            this.slimLoadingBarService.complete();
        })
        .subscribe(
            data => {
              console.log(data)
              localStorage.setItem('id_token', data.token); //set the JWT token

                this.uservoiceService.identify();
              this.router.navigate(['/register/plan'])
            },
            error => {
                this.notificationService.show("An error occurred!", error)
            }

        );
  }
}

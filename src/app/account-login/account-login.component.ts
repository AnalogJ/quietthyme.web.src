import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UservoiceService } from '../services/uservoice.service';
import { NotificationService } from '../services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
declare var ga: any;

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.less'],
})
export class AccountLoginComponent implements OnInit {
  loading = {
    login: false,
    oauth: true,
  };
  loginEmail: string;
  loginPassword: string;

  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private apiService: ApiService,
    private uservoiceService: UservoiceService,
    private notificationService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {}

  login() {
    if (this.loading.login) return;

    this.loading.login = true;
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });
    this.apiService
      .authLogin(this.loginEmail, this.loginPassword)
      .finally(() => {
        this.loading.login = false;
        this.slimLoadingBarService.complete();
      })
      .subscribe(
        data => {
          localStorage.setItem('id_token', data.token); //set the JWT token

          this.uservoiceService.identify();
          if (this.activatedRoute.snapshot.params['requested']) {
            this.router.navigate([
              this.activatedRoute.snapshot.params['requested'],
            ]);
          } else {
            this.router.navigate(['/storage']);
          }
        },
        error => {
          this.notificationService.show('An error occurred!', error);
        }
      );
  }
}

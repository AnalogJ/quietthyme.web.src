import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { KloudlessAuthenticatorDirective } from './shared/kloudless-authenticator.directive';
import { FooterComponent } from './partials/footer/footer.component';
import { PageTitleComponent } from './partials/page-title/page-title.component';
import { HeaderComponent } from './partials/header/header.component';
import { StorageComponent } from './storage/storage.component';
import { LibraryComponent } from './library/library.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { StoragePanelComponent } from './partials/storage-panel/storage-panel.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { StripeCheckoutButtonDirective } from './shared/stripe-checkout-button.directive';
import { FileSizePipe } from './shared/file-size.pipe';
import { ApiService } from './services/api.service'
import { CacheService } from './services/cache.service'
import { AuthGuard } from './services/auth-guard.service'

//Third party
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MarkdownModule } from 'angular2-markdown';
import { MasonryModule } from 'angular2-masonry';
import { ScrollSpyModule } from 'ng2-scrollspy';
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix.directive';
import { AccountRegisterPlanComponent } from './account-register-plan/account-register-plan.component';
import { MomentModule } from 'angular2-moment';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



export function getAuthHttp(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token',
    noJwtError: true,
    headerPrefix: 'JWT',
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [{'Content-Type':'application/json'}]
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    KloudlessAuthenticatorDirective,
    FooterComponent,
    PageTitleComponent,
    HeaderComponent,
    StorageComponent,
    LibraryComponent,
    BookDetailsComponent,
    ScrollSpyAffixDirective,
    StoragePanelComponent,
    FileSizePipe,
    SettingsComponent,
    PrivacyComponent,
    StripeCheckoutButtonDirective,
    AccountRegisterPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    MarkdownModule.forRoot(),
    MasonryModule,
    InfiniteScrollModule,
    ScrollSpyModule.forRoot(),
    MomentModule,
    RouterModule.forRoot([
        //Public Endpoints
      { path: 'login', component: AccountLoginComponent },
      { path: 'register', component: AccountRegisterComponent },
      { path: 'privacy', component: PrivacyComponent },

        //Auth Endpoints
      { path: 'register/plan', component: AccountRegisterPlanComponent, canActivate: [AuthGuard] },
      { path: 'storage', component: StorageComponent, canActivate: [AuthGuard] },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: 'storage/:source', component: StorageComponent, canActivate: [AuthGuard] },
      { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
      { path: 'book/:bookId', component: BookDetailsComponent, canActivate: [AuthGuard] },
      // { path: 'project/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber/logs', component: ProjectDeployLogsComponent, canActivate: [AuthGuard] },

      { path: '', pathMatch: 'full', redirectTo: 'storage' },
      // { path: '**', component: PageNotFoundComponent }
      { path: '**', redirectTo: 'login' }
    ])
  ],
  providers: [
    ApiService,
    CacheService,
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

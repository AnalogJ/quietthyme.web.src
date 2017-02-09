import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KloudlessAuthenticatorDirective } from './shared/kloudless-authenticator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    DashboardComponent,
    KloudlessAuthenticatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      { path: 'login', component: AccountLoginComponent },
      { path: 'register', component: AccountRegisterComponent },


      { path: 'dashboard', component: DashboardComponent }, //, canActivate: [AuthGuard] },
      // { path: 'project/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber/logs', component: ProjectDeployLogsComponent, canActivate: [AuthGuard] },

      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      // { path: '**', component: PageNotFoundComponent }
      { path: '**', redirectTo: 'login' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

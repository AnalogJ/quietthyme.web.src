import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
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
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      { path: 'login', component: AccountLoginComponent },
      { path: 'register', component: AccountRegisterComponent },


      { path: 'storage', component: StorageComponent }, //, canActivate: [AuthGuard] },
      { path: 'library', component: LibraryComponent }, //, canActivate: [AuthGuard] },
      // { path: 'project/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber/logs', component: ProjectDeployLogsComponent, canActivate: [AuthGuard] },

      { path: '', pathMatch: 'full', redirectTo: 'storage' },
      // { path: '**', component: PageNotFoundComponent }
      { path: '**', redirectTo: 'login' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

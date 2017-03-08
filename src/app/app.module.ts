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
import { BookDetailsComponent } from './book-details/book-details.component';
import { StoragePanelComponent } from './partials/storage-panel/storage-panel.component';
import { SettingsComponent } from './settings/settings.component';

import { ApiService } from './services/api.service'
import { CacheService } from './services/cache.service'
import { AuthGuard } from './services/auth-guard.service'
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MarkdownModule } from 'angular2-markdown';
import { MasonryModule } from 'angular2-masonry';
import { ScrollSpyModule } from 'ng2-scrollspy';
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileSizePipe } from './shared/file-size.pipe';

export function getAuthHttp(http: any) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    headerPrefix: 'JWT',
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [{'Content-Type':'application/json'}]
  }), http);
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
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    MarkdownModule.forRoot(),
    MasonryModule,
    ScrollSpyModule.forRoot(),
    ChartsModule,

    RouterModule.forRoot([
      { path: 'login', component: AccountLoginComponent },
      { path: 'register', component: AccountRegisterComponent },

      { path: 'storage', component: StorageComponent, canActivate: [AuthGuard] },
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
      deps: [Http]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

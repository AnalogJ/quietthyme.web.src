import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  URLSearchParams,
  ResponseContentType,
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app-settings';
import { CacheService } from '../services/cache.service';
import { StoragePrepareBookModel } from '../models/storage-prepare-book-model'
import { BookModel } from '../models/book'
import { Observer } from 'rxjs';

@Injectable()
export class ApiService {
  private tagStorageStatus = 'tagStorageStatus'
  private tagLibrary = 'tagLibrary'

  constructor(
    public authHttp: AuthHttp,
    private http: Http,
    private cacheService: CacheService
  ) {}

  /////////////////////////////////////////////////////////////////////////////
  //Helper functions
  /////////////////////////////////////////////////////////////////////////////

  private extractData(res: Response) {
    let body = res.json();
    console.log('RAW BODY', body);
    return body.data || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error ? body.error.message : JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} - ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
  cacheKey(method, url, query?: URLSearchParams): string {
    return '[' + method + ']' + url + (query ? '?' + query.toString() : '');
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  tokenPayload() {
    var token = localStorage.getItem('id_token');
    var jwtHelper = new JwtHelper();
    var payload = jwtHelper.decodeToken(token);
    return payload;
  }

  /////////////////////////////////////////////////////////////////////////////
  // Unauthenticated functions
  /////////////////////////////////////////////////////////////////////////////
  logout() {
    localStorage.removeItem('id_token');
  }

  authRegister(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    return this.http
      .post(`${AppSettings.API_ENDPOINT}/auth/register`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .map(this.extractData)
      .catch(this.handleError);
  }

  authLogin(email: string, password: string): Observable<any> {
    return this.http
      .post(`${AppSettings.API_ENDPOINT}/auth/login`, {
        email: email,
        password: password,
      })
      .map(this.extractData)
      .catch(this.handleError);
  }

  /////////////////////////////////////////////////////////////////////////////
  // Authenticated functions
  /////////////////////////////////////////////////////////////////////////////
  catalogUrl(): string {
    var jwtPayload = this.tokenPayload();

    return `${AppSettings.CATALOG_ENDPOINT}/${jwtPayload.catalog_token}`;
  }

  userPushNotifySubscribe(subscription: any): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/user/pushnotify/subscribe`;
    return this.authHttp
        .post(url, subscription)
        .map(this.extractData)
        .catch(this.handleError);
  }

  userPushNotifyTest(): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/user/pushnotify/test`;
    return this.authHttp
        .post(url, {})
        .map(this.extractData)
        .catch(this.handleError);
  }

  userPushNotifyUnsubscribe(subscription: any): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/user/pushnotify/unsubscribe`;
    return this.authHttp
        .post(url, subscription)
        .map(this.extractData)
        .catch(this.handleError);
  }

  userUpdate(updateData): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/user/update`;
    return this.authHttp
        .post(url, updateData)
        .map(this.extractData)
        .catch(this.handleError);
  }

  userPasswordReset(oldPassword, newPassword): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/user/password`;
    return this.authHttp
        .post(url, {
          oldPassword: oldPassword,
          newPassword: newPassword
        })
        .map(this.extractData)
        .catch(this.handleError);
  }


  userCatalog(): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/user/catalog`;
    return this.authHttp
        .post(url, {})
        .map(this.extractData)
        .catch(this.handleError);
  }

  userPlan(stripePlanData: string): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/user/plan`;
    return this.authHttp
      .post(url, stripePlanData)
      .map(this.extractData)
      .catch(this.handleError);
  }

  storageStatus(): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/storage/status`;
    var cacheKey = this.cacheKey('GET', url);
    
    return (
      this.cacheService.get(cacheKey) ||
      this.cacheService.put(
        cacheKey,
        this.authHttp.get(url).map(this.extractData).catch(this.handleError),
          {tag: this.tagStorageStatus}
      )
    );
  }

  storageLink(kloudlessData: any): Observable<any> {
    this.cacheService.deleteTagged(this.tagStorageStatus)

    return this.authHttp
      .post(`${AppSettings.API_ENDPOINT}/storage/link`, kloudlessData)
      .map(this.extractData)
      .catch(this.handleError);
  }

  storageDetach(credentialId: string, deleteStorage: boolean): Observable<any> {

    //bust the storageStatus cache
    this.cacheService.deleteTagged(this.tagStorageStatus)
    this.cacheService.deleteTagged(this.tagLibrary)


    var url = `${AppSettings.API_ENDPOINT}/storage/detach`;
    return this.authHttp
        .post(url, { credential_id: credentialId, deleteStorage: deleteStorage })
        .map(this.extractData)
        .catch(this.handleError)
  }

  storagePrepareBook(prepare_data: StoragePrepareBookModel): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('source', 'web'); //if we dont specify the source, we'll get the wrong kind of signedUrl from the API (one without a policy)

    //TODO: this should bust the /book cache
    return this.authHttp
        .post(`${AppSettings.API_ENDPOINT}/storage/prepare/book`, prepare_data, {search: params})
        .map(this.extractData)
        .catch(this.handleError);
  }


  bookList(filter): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/book`;
    let params: URLSearchParams = new URLSearchParams();
    if (filter.sort) params.set('sort', filter.sort.toString());
    if (filter.storage_id)
      params.set('storage_id', filter.storage_id.toString());
    if (filter.storage) params.set('storage', filter.storage.toString());
    if (filter.page) params.set('page', filter.page.toString());

    var cacheKey = this.cacheKey('GET', url, params);
    return (
      this.cacheService.get(cacheKey) ||
      this.cacheService.put(
        cacheKey,
        this.authHttp
          .get(url, { search: params })
          .map(this.extractData)
          .catch(this.handleError),
          {tag: this.tagLibrary}
      )
    );
  }

  book(bookId: string): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/book`;

    let params: URLSearchParams = new URLSearchParams();
    params.set('id', bookId.toString());

    var cacheKey = this.cacheKey('GET', url, params);
    return (
      this.cacheService.get(cacheKey) ||
      this.cacheService.put(
        cacheKey,
        this.authHttp
          .get(url, { search: params })
          .map(this.extractData)
          .catch(this.handleError),
          {tag: this.tagLibrary}
      )
    );
  }

  bookDestroy(bookId: string): Observable<any> {
    this.cacheService.deleteTagged(this.tagLibrary);
    var url = `${AppSettings.API_ENDPOINT}/book/${bookId.toString()}`;
    let params: URLSearchParams = new URLSearchParams();
    params.set('deleteStorage', 'true');

    return this.authHttp
        .delete(url, { search: params })
        .map(this.extractData)
        .catch(this.handleError)
  }

  bookEdit(bookId: string, book: BookModel): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/book/${bookId.toString()}`;

    let params: URLSearchParams = new URLSearchParams();
    params.set('source', 'manual');

    return this.authHttp
        .post(url, book, { search: params })
        .map(this.extractData)
        .catch(this.handleError)
  }

  download(bookId: string): Observable<any> {
    //http://stackoverflow.com/a/41252342
    let headers = new Headers({ Accept: '*' });
    let options = new RequestOptions({ headers: headers });
    options.responseType = ResponseContentType.Blob;

    return this.authHttp
      .get(`${AppSettings.API_ENDPOINT}/storage/${bookId}`)
      .map(this.extractData)
      .flatMap((resp: Response) => this.http.get(resp.url, options))
      .catch(this.handleError);
  }
}

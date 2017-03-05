import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {AppSettings} from '../app-settings';
import {Observer} from "rxjs";

@Injectable()
export class ApiService {

  constructor(public authHttp: AuthHttp, private http: Http) { }

  //Helper functions
  private extractData(res: Response) {
    let body = res.json();
    console.log("RAW BODY", body);
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
  }
  cacheKey(method, url, query?:URLSearchParams): string {
    return '[' + method + ']' + url + '?' + (query || {}).toString()
  }


  // Unauthenticated functions

  loggedIn() {
    return tokenNotExpired();
  }

  authRegister(name:string, email:string, password:string): Observable<any> {
    return this.http.post(`${AppSettings.API_ENDPOINT}/auth/register`,
        {
          "name":name,
          "email": email,
          "password": password
        })
        .map(this.extractData)
        .catch(this.handleError);
  }

  authLogin(email:string, password:string): Observable<any> {
    return this.http.post(`${AppSettings.API_ENDPOINT}/auth/login`,
        {
          "email": email,
          "password": password
        })
        .map(this.extractData)
        .catch(this.handleError);
  }

  // Authenticated functions
  storageStatus(): Observable<any>{
    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/storage/status`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  storageLink(kloudlessData:any): Observable<any>{
    return this.authHttp.post(`${AppSettings.API_ENDPOINT}/storage/link`, kloudlessData)
        .map(this.extractData)
        .catch(this.handleError);
  }

  bookList(): Observable<any> {
    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/book`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  book(bookId:string): Observable<any>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', bookId.toString());

    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/book`,{search: params})
        .map(this.extractData)
        .catch(this.handleError);
  }
  download(bookId:string): Observable<any>{
    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/storage/${bookId}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

}

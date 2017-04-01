import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Http, Response, Headers, RequestOptions, URLSearchParams, ResponseContentType} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {AppSettings} from '../app-settings';
import { CacheService } from '../services/cache.service'
import {Observer} from "rxjs";

@Injectable()
export class ApiService {

  constructor(public authHttp: AuthHttp, private http: Http, private cacheService: CacheService) { }

  /////////////////////////////////////////////////////////////////////////////
  //Helper functions
  /////////////////////////////////////////////////////////////////////////////

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

  loggedIn() {
    return tokenNotExpired();
  }

  tokenPayload(){
    var token = localStorage.getItem('id_token')
    var jwtHelper = new JwtHelper();
    var payload = jwtHelper.decodeToken(token);
    return payload
  }


  /////////////////////////////////////////////////////////////////////////////
  // Unauthenticated functions
  /////////////////////////////////////////////////////////////////////////////
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

  /////////////////////////////////////////////////////////////////////////////
  // Authenticated functions
  /////////////////////////////////////////////////////////////////////////////
  storageStatus(): Observable<any>{
    var url = `${AppSettings.API_ENDPOINT}/storage/status`

    var cacheKey = this.cacheKey('GET', url);
    return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url)
        .map(this.extractData)
        .catch(this.handleError));
  }

  storageLink(kloudlessData:any): Observable<any>{
    //TODO: this should bust the /storage/status cache
    return this.authHttp.post(`${AppSettings.API_ENDPOINT}/storage/link`, kloudlessData)
        .map(this.extractData)
        .catch(this.handleError);
  }

  bookList(filter): Observable<any> {
    var url = `${AppSettings.API_ENDPOINT}/book`
    let params: URLSearchParams = new URLSearchParams();
    if(filter.sort) params.set('sort', filter.sort.toString());
    if(filter.storage) params.set('storage', filter.storage.toString());
    if(filter.page) params.set('page', filter.page.toString());

    var cacheKey = this.cacheKey('GET', url, params);
    return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url,{search: params})
        .map(this.extractData)
        .catch(this.handleError));
  }

  book(bookId:string): Observable<any>{
    var url = `${AppSettings.API_ENDPOINT}/book`

    let params: URLSearchParams = new URLSearchParams();
    params.set('id', bookId.toString());


    var cacheKey = this.cacheKey('GET', url, params);
    return this.cacheService.get(cacheKey) || this.cacheService.put(cacheKey, this.authHttp.get(url,{search: params})
        .map(this.extractData)
        .catch(this.handleError));
  }
  download(bookId:string): Observable<any>{
    //http://stackoverflow.com/a/41252342
    let headers = new Headers({ 'Accept': '*' });
    let options = new RequestOptions({ headers: headers });
    options.responseType = ResponseContentType.Blob;


    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/storage/${bookId}`)
        .map(this.extractData)
        .flatMap((resp:Response) => this.http.get(resp.url, options))
        .catch(this.handleError)
  }

}

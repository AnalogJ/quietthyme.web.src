import { ErrorHandler } from "@angular/core";
// import { Router } from '@angular/router';

import { Injector } from "@angular/core";
import { Injectable } from "@angular/core";
import * as Rollbar from 'rollbar';
import { ApiService } from './api.service';

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {

  constructor(private injector: Injector, private apiService: ApiService) { }
  handleError(err:any) : void {

    try{
      var rollbar = this.injector.get(Rollbar);
      var configurePayload =  {
        payload: {
          // context: this.router.url,
          person: null
        }
      };

      if(this.apiService.loggedIn()){
        var tokenData = this.apiService.tokenPayload();
        configurePayload.payload.person = {
          id: tokenData.uid,
          username: tokenData.first_name + ' ' + tokenData.last_name,
          email: tokenData.email
        }
      }
      rollbar.configure(configurePayload);
      rollbar.error(err.originalError || err);
    }
    catch(e){

    }


  }

}

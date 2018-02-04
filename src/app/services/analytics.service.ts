import { Injectable } from '@angular/core';
declare var ga: any;

@Injectable()
export class AnalyticsService {

  constructor() { }

  public visitPage(url: string){
    try{
      ga('set', 'page', url);
      ga('send', 'pageview');
    }
    catch(e){
      //"Google Analytics event has failed. Possible popup blocker"
      //ignore.
    }
  }

}

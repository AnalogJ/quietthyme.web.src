import { Component, AfterViewInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { AffixDirective } from 'ng2-affix';

@Component({
  selector: 'quietthyme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.scrollSpyService.getObservable('spyheader').subscribe((e: any) => {
    //   console.log('ScrollSpy::spyheader: ', e);
    // });
  }
}

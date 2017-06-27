import { Component, ViewContainerRef } from '@angular/core';
import './rxjs-operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef;

  title = 'app works!';

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }

  ngAfterViewInit() {
    // this.scrollSpyService.getObservable('window').subscribe((e: any) => {
    //   console.log('ScrollSpy::window: ', e);
    // });
  }


}

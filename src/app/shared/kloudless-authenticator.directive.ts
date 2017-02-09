// based off of http://stackoverflow.com/questions/37412398/creating-angular2-component-directive-wrapper-for-dygraphs
import { Component, Input, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output } from '@angular/core';

declare var Kloudless:any;


@Component({
  selector: 'kloudless-authenticator',
  template: `
    <button #authenticator><ng-content></ng-content></button>
  `
})
export class KloudlessAuthenticatorDirective {

  @ViewChild('authenticator')
  elt:ElementRef;

  @Input() scope : string;
  @Input() clientId : string;

  @Output() onAuthenticated: EventEmitter<any> = new EventEmitter();

  ngAfterViewInit() {

    console.log(this.scope)
    console.log(this.clientId)

    var self = this;

    Kloudless.authenticator(this.elt.nativeElement, {
      scope: this.scope,
      client_id: this.clientId
    }, function(auth_result){
      self.onAuthenticated.emit(auth_result);
    });
  }
}

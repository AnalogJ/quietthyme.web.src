import {
  Directive,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';
declare var StripeCheckout: any;

@Directive({
  selector: '[stripeCheckoutButton]',
})
export class StripeCheckoutButtonDirective {
  @Output() onCheckout: EventEmitter<any> = new EventEmitter();
  @Input() planName: string;
  @Input() planId: string;
  @Input() planCost: number;

  handler: any;

  elt: ElementRef;
  constructor(_elt: ElementRef, private apiService: ApiService) {
    this.elt = _elt;
  }

  ngAfterViewInit() {
    var self = this;

    this.handler = StripeCheckout.configure({
      key: environment.stripeAccount,
      // image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      image: 'assets/images/services/quietthyme.png',
      locale: 'auto',
      zipCode: true,
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        self.onCheckout.emit({ token: token, planId: self.planId });
      },
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.handler.open({
      name: 'QuietThyme',
      description: this.planName,
      amount: this.planCost,
      panelLabel: 'Subscribe',
      email: this.apiService.tokenPayload().email,
    });
    event.preventDefault();
  }
}

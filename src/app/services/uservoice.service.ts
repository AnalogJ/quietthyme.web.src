import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
declare var UserVoice: any;

@Injectable()
export class UservoiceService {
  constructor(private apiService: ApiService) {}

  identify() {
    try {
      //set UserVoice data
      // Identify the user and pass traits
      // To enable, replace sample data with actual user traits and uncomment the line

      var tokenPayload = this.apiService.tokenPayload();

      var uservoicePayload = {
        email: tokenPayload.email, // User’s email address
        name: tokenPayload.name, // User’s real name
        //created_at: 1364406966, // Unix timestamp for the date the user signed up
        id: tokenPayload.uid, // Optional: Unique id of the user (if set, this should not change)
        type: tokenPayload.plan, // Optional: segment your users by type
        account: {
          // Account traits are only available on some plans
          // id:           123, // Optional: associate multiple users with a single account
          name: tokenPayload.name, // Account name
          // created_at:   1364406966, // Unix timestamp for the date the account was created
          // monthly_rate: 9.99, // Decimal; monthly rate of the account
          // ltv:          1495.00, // Decimal; lifetime value of the account
          plan: tokenPayload.plan, // Plan name for the account
        },
      };

      console.log('User:', uservoicePayload);
      UserVoice.push(['identify', uservoicePayload]);
    } catch (e) {
      //do nothing with errors.
    }
  }
}

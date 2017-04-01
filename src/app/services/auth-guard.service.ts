import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ) {
    if(this.apiService.loggedIn()) {
      if(this.apiService.tokenPayload().plan == 'none'){
        //redirect the user to the plans page.
        console.log(route, state)
        this.router.navigate(['/settings', {'tab': 'plans'}]);
        return false;
      }
      return true;
    }
    else {
      console.log(route, state)
      this.router.navigate(['/login', {'requested': state.url}]);
      return false;
    }
  }
}
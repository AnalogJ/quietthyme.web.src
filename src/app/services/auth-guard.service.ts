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

      //if the user is logged in, always let them go to the register/plan page if requested.
      if(state.url == '/register/plan'){
        return true;
      }
      else if(this.apiService.tokenPayload().plan == 'none' ){
        //user doesnt have a plan, redirec them to the settings page.
        console.log("No plan, redirecting to /register/plan page.")
        this.router.navigate(['/register/plan']);
        return false;
      }
      else{
        return true;
      }
    }
    else {
      console.log(route, state)
      this.router.navigate(['/login', {'requested': state.url}]);
      return false;
    }
  }
}
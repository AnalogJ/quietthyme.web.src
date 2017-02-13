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
      return true;
    } else {
      console.log(route, state)
      this.router.navigate(['/login', {'requested': state.url}]);
      return false;
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'quietthyme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {}

  logout() {
    //remove token, and redirect to login page.
    this.apiService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.less'],
})
export class TermsComponent implements OnInit {
  constructor(
      private router: Router,
      private analyticsService: AnalyticsService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.visitPage(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit() {}
}

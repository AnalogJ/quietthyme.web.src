import { Component, OnInit, Input } from '@angular/core';
import {PageTitleBreadcrumb} from 'app/models/page-title-breadcrumb'

import { JwtHelper } from 'angular2-jwt'

@Component({
  selector: 'quietthyme-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.less']
})
export class PageTitleComponent implements OnInit {

  @Input() title : string;
  @Input() subtitle : string;
  @Input() breadcrumbs : Array<PageTitleBreadcrumb> = []

  catalogToken: string = ''

  constructor() { }

  ngOnInit() {
    var jwtHelper = new JwtHelper();
    this.catalogToken = jwtHelper.decodeToken(localStorage.getItem('id_token')).catalog_token
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {PageTitleBreadcrumb} from 'app/models/page-title-breadcrumb'
@Component({
  selector: 'quietthyme-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.less']
})
export class PageTitleComponent implements OnInit {

  @Input() title : string;
  @Input() subtitle : string;
  @Input() breadcrumbs : Array<PageTitleBreadcrumb> = []


  constructor() { }

  ngOnInit() {
  }

}

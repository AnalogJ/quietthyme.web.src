import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'quietthyme-opds-panel',
  templateUrl: './opds-panel.component.html',
  styleUrls: ['./opds-panel.component.less']
})
export class OpdsPanelComponent implements OnInit {
  catalogUrl: string = "";

  constructor(private apiService: ApiService,) { }
  ngOnInit() {
    this.catalogUrl = this.apiService.catalogUrl()
  }

}

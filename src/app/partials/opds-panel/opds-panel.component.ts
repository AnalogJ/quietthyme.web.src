import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
declare var Granim: any;

@Component({
  selector: 'quietthyme-opds-panel',
  templateUrl: './opds-panel.component.html',
  styleUrls: ['./opds-panel.component.less'],
})
export class OpdsPanelComponent implements OnInit {
  catalogUrl: string = '';

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.catalogUrl = this.apiService.catalogUrl();

    var granimInstance = new Granim({
      element: '#granim-opds',
      name: 'granim',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [
            //#4876BD,#5448BD,#8F48BD,#BD48B1
            ['#4876BD', '#5448BD'],
            // ['#8F48BD', '#BD48B1'],
            ['#238b53', '#669e4b'],
          ],
        },
      },
    });
  }
}

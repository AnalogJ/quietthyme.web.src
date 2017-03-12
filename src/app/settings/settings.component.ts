import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  userData: any = {}

  constructor() { }

  ngOnInit() {
    var jwtHelper = new JwtHelper();
    this.userData = jwtHelper.decodeToken(localStorage.getItem('id_token'))
  }

}

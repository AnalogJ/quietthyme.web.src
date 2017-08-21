import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotificationState, NotificationService } from './../../services/notification.service';


@Component({
  selector: 'quietthyme-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnDestroy, OnInit {
  visible = false;
  ignored = false;
  title : string;
  message : string;


  private notificationStateChanged: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationStateChanged = this.notificationService.notificationState
        .subscribe((state: NotificationState) => {
              this.visible = state.show;
              this.message = state.message;
              this.title = state.title;
              this.ignored = false;
        });
  }
  ngOnDestroy() {
    this.notificationStateChanged.unsubscribe();
  }

  ignoreNotification(){
    this.ignored = true;
  }

}

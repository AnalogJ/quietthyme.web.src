import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {
  NotificationState,
  NotificationType,
  NotificationService,
} from './../../services/notification.service';

@Component({
  selector: 'quietthyme-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less'],
})
export class NotificationComponent implements OnDestroy, OnInit {
  notifications: NotificationState[] = [];

  private notificationStateChanged: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationStateChanged = this.notificationService.notificationState.subscribe(
      (state: NotificationState) => {
        if (!state) {
          // clear notifications when an empty notification is received
          this.notifications = [];
          return;
        }

        // add notification to array
        this.notifications.push(state);

        if (state.autohide) {
          window.setTimeout(() => {
            this.removeNotification(state);
          },  3*1000);
        }
      }
    );
  }
  ngOnDestroy() {
    this.notificationStateChanged.unsubscribe();
  }

  removeNotification(notification: NotificationState) {
    this.notifications = this.notifications.filter(x => x !== notification);
  }


  cssClass(notification: NotificationState) {
    if (!notification) {
      return;
    }

    // return css class based on alert type
    switch (notification.type) {
      case NotificationType.Success:
        return 'notification notification-success';
      case NotificationType.Error:
        return 'notification notification-danger';
      case NotificationType.Info:
        return 'notification notification-info';
      case NotificationType.Warning:
        return 'notification notification-warning';
    }
  }
}

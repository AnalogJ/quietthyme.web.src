import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationStart } from '@angular/router';

export enum NotificationType {
  Success,
  Error,
  Info,
  Warning
}

export class NotificationState {
  type: NotificationType;
  title: string;
  message: string;
  visible: boolean;
  autohide: boolean;
}

@Injectable()
export class NotificationService {
  private notificationSubject = new Subject<NotificationState>();
  private keepAfterRouteChange = false;

  notificationState = this.notificationSubject.asObservable();

  constructor(
    @Optional()
    @SkipSelf()
    prior: NotificationService,
    private router: Router
  ) {
    if (prior) {
      return prior;
    }
    console.log('created global notification service');

    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  success(title: string, message: string, autohide = true, keepAfterRouteChange = false) {
    this.alert(NotificationType.Success, title, message, autohide, keepAfterRouteChange);
  }

  error(title: string, message: string, autohide = true, keepAfterRouteChange = false) {
    this.alert(NotificationType.Error, title, message, autohide, keepAfterRouteChange);
  }

  info(title: string, message: string, autohide = true, keepAfterRouteChange = false) {
    this.alert(NotificationType.Info, title, message, autohide, keepAfterRouteChange);
  }

  warn(title: string, message: string, autohide = true, keepAfterRouteChange = false) {
    this.alert(NotificationType.Warning, title, message, autohide, keepAfterRouteChange);
  }

  alert(type: NotificationType, title: string, message: string, autohide = true, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.notificationSubject.next(<NotificationState>{
      type: type,
      title: title,
      message: message,
      autohide: autohide
    });
  }

  clear() {
    // clear alerts
    this.notificationSubject.next();
  }

  // show(title: string, message: string) {
  //   this.notificationSubject.next(
  //     <NotificationState>{ title: title, message: message, show: true }
  //   );
  // }
  //
  // hide() {
  //   this.notificationSubject.next(<NotificationState>{ show: false });
  // }
}

import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface NotificationState {
  show: boolean;
  title: string;
  message: string;
}

@Injectable()
export class NotificationService {
  private notificationSubject = new Subject<NotificationState>();

  notificationState = this.notificationSubject.asObservable();

  constructor(@Optional() @SkipSelf() prior: NotificationService) {
    if (prior) { return prior; }
    console.log("created global notification service")
  }

  show(title: string, message: string) {
    this.notificationSubject.next(<NotificationState>{ title: title, message: message, show: true });
  }

  hide() {
    this.notificationSubject.next(<NotificationState>{ show: false });
  }

}

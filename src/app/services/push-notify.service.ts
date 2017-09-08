import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';

declare var navigator: any;
declare var window: any;

export interface PushNotificationState {
  hasSubscription: boolean;
  subscriptionData: any;
}

// Based on https://justmarkup.com/log/2017/02/implementing-push-notifications/

@Injectable()
export class PushNotifyService {

  //used for components and other services to listen to subcription state changes.
  private pushNotificationSubject = new Subject<PushNotificationState>();
  pushNotificationState = this.pushNotificationSubject.asObservable();

  serviceWorkerRegistration = null;

  hasSubscription: boolean = false;
  subscriptionData = false;

  constructor(private apiService: ApiService) {}

  public init(){

    if (!('serviceWorker' in navigator && 'PushManager' in window)) {
      console.log("Cannot register for push notifications, serviceWorker or PushManager is missing.")
      return
    }
    console.log("Ready for push notifications")

    var self = this;

    navigator.serviceWorker.register('service-worker.js')
        .then(function(sw) {
          self.serviceWorkerRegistration = sw;

          // Set the initial subscription value
          console.log(sw);
          return self.serviceWorkerRegistration.pushManager.getSubscription()
              .then(function(subscription) {
                self.hasSubscription = !(subscription === null);

                self.publishSubscriptionState();
              });
        })
        .catch(function(error) {
          console.error('Service Worker Error', error);
        });
  }

  publishSubscriptionState(){
    this.pushNotificationSubject.next(
        <PushNotificationState>{ hasSubscription: this.hasSubscription, subscriptionData: this.subscriptionData }
    );
  }

  public subscribeUser() {
    var self = this;
    this.serviceWorkerRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: self.urlB64ToUint8Array(environment.pushNotifyPublicKey)
    })
      .then(function(subscription) {
        console.log("THIS IS THE SUBSCRIPTION DATA", subscription)
        self.apiService
            .userPushNotifySubscribe(subscription)
            .subscribe(
                sub_data => {
                  console.log('User is subscribed.');
                  console.log(sub_data);
                  self.hasSubscription = true;
                  self.subscriptionData = subscription;
                  self.publishSubscriptionState();
                },
                error => {
                  self.hasSubscription = false;
                  self.publishSubscriptionState();
                  console.error('error communicating with API to enable push notifications', error);
                }
            );
      })
      .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
      });
  }

  public unsubscribeUser() {
    var self = this;
    this.serviceWorkerRegistration.pushManager.getSubscription()
        .then(function(subscription) {
          if (!subscription) {
            console.log('No push notification subscription found');
            self.hasSubscription = false;
            self.publishSubscriptionState();
            return
          }

          self.subscriptionData = subscription;

          self.apiService
              .userPushNotifyUnsubscribe(subscription)
              .finally(() => {
                console.log("Removing local subscription")
                subscription.unsubscribe();
              })
              .subscribe(
                  sub_data => {
                    console.log('User is unsubscribed.');
                    console.log(sub_data);
                    self.hasSubscription = false;
                    self.subscriptionData = null;
                    self.publishSubscriptionState();
                  },
                  error => {
                    self.hasSubscription = true;
                    self.publishSubscriptionState();
                    console.error('error communicating with API to disable push notifications', error);
                  }
              );
        });
  }


  //helper functions

  urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

}

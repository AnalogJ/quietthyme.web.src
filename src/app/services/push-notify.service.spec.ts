import { TestBed, inject } from '@angular/core/testing';

import { PushNotifyService } from './push-notify.service';

describe('PushNotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushNotifyService]
    });
  });

  it('should be created', inject([PushNotifyService], (service: PushNotifyService) => {
    expect(service).toBeTruthy();
  }));
});

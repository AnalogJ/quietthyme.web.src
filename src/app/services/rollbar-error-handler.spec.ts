import { TestBed, inject } from '@angular/core/testing';

import { RollbarErrorHandlerService } from './rollbar-error-handler.service';

describe('RollbarErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollbarErrorHandlerService]
    });
  });

  it('should be created', inject([RollbarErrorHandlerService], (service: RollbarErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});

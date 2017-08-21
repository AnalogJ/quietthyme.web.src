import { TestBed, inject } from '@angular/core/testing';

import { UservoiceService } from './uservoice.service';

describe('UservoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UservoiceService]
    });
  });

  it('should be created', inject([UservoiceService], (service: UservoiceService) => {
    expect(service).toBeTruthy();
  }));
});

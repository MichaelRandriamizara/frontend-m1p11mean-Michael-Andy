import { TestBed } from '@angular/core/testing';

import { DepensePaymentService } from './depense-payment.service';

describe('DepensePaymentService', () => {
  let service: DepensePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepensePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

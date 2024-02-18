import { TestBed } from '@angular/core/testing';

import { TypeDepensePaymentService } from './type-depense-payment.service';

describe('TypeDepensePaymentService', () => {
  let service: TypeDepensePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDepensePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

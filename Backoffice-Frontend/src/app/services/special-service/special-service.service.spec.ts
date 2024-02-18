import { TestBed } from '@angular/core/testing';

import { SpecialServiceService } from './special-service.service';

describe('SpecialServiceService', () => {
  let service: SpecialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

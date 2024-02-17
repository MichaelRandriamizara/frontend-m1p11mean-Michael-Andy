import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensePaymentComponent } from './depense-payment.component';

describe('DepensePaymentComponent', () => {
  let component: DepensePaymentComponent;
  let fixture: ComponentFixture<DepensePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepensePaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepensePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

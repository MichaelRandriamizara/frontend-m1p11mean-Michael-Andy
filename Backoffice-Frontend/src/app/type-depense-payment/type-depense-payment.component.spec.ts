import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDepensePaymentComponent } from './type-depense-payment.component';

describe('TypeDepensePaymentComponent', () => {
  let component: TypeDepensePaymentComponent;
  let fixture: ComponentFixture<TypeDepensePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeDepensePaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeDepensePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

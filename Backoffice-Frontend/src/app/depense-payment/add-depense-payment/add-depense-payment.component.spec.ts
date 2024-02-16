import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepensePaymentComponent } from './add-depense-payment.component';

describe('AddTypeDepenseComponent', () => {
  let component: AddDepensePaymentComponent;
  let fixture: ComponentFixture<AddDepensePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDepensePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepensePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

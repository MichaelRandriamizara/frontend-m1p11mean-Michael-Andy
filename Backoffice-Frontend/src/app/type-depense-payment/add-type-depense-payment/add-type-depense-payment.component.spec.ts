import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeDepensePaymentComponent } from './add-type-depense-payment.component';

describe('AddTypeDepenseComponent', () => {
  let component: AddTypeDepensePaymentComponent;
  let fixture: ComponentFixture<AddTypeDepensePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTypeDepensePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeDepensePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

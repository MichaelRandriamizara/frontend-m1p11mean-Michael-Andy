import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeDepensePaymentComponent } from './edit-type-depense-payment.component';

describe('EditTypeDepenseComponent', () => {
  let component: EditTypeDepensePaymentComponent;
  let fixture: ComponentFixture<EditTypeDepensePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTypeDepensePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeDepensePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepensePaymentComponent } from './edit-depense-payment.component';

describe('EditTypeDepenseComponent', () => {
  let component: EditDepensePaymentComponent;
  let fixture: ComponentFixture<EditDepensePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDepensePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDepensePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

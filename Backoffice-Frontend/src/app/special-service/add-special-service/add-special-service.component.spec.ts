import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialServiceComponent } from './add-special-service.component';

describe('AddSpecialServiceComponent', () => {
  let component: AddSpecialServiceComponent;
  let fixture: ComponentFixture<AddSpecialServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSpecialServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSpecialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

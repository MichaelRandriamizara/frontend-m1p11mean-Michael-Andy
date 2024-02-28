import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialServiceComponent } from './special-service.component';

describe('SpecialServiceComponent', () => {
  let component: SpecialServiceComponent;
  let fixture: ComponentFixture<SpecialServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

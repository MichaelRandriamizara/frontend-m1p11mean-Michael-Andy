import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeDepenseComponent } from './add-type-depense.component';

describe('AddTypeDepenseComponent', () => {
  let component: AddTypeDepenseComponent;
  let fixture: ComponentFixture<AddTypeDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTypeDepenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTypeDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

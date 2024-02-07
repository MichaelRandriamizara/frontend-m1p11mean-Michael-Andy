import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeDepenseComponent } from './edit-type-depense.component';

describe('EditTypeDepenseComponent', () => {
  let component: EditTypeDepenseComponent;
  let fixture: ComponentFixture<EditTypeDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTypeDepenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTypeDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

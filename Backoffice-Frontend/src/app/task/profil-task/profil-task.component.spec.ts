import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTaskComponent } from './profil-task.component';

describe('ProfilTaskComponent', () => {
  let component: ProfilTaskComponent;
  let fixture: ComponentFixture<ProfilTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

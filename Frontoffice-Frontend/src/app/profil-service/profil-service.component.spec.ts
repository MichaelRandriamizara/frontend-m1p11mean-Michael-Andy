import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilServiceComponent } from './profil-service.component';

describe('ProfilServiceComponent', () => {
  let component: ProfilServiceComponent;
  let fixture: ComponentFixture<ProfilServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

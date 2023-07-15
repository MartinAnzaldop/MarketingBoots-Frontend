import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVistaComponent } from './admin-vista.component';

describe('AdminVistaComponent', () => {
  let component: AdminVistaComponent;
  let fixture: ComponentFixture<AdminVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

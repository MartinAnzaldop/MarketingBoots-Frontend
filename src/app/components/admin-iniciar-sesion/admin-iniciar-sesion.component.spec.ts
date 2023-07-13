import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIniciarSesionComponent } from './admin-iniciar-sesion.component';

describe('AdminIniciarSesionComponent', () => {
  let component: AdminIniciarSesionComponent;
  let fixture: ComponentFixture<AdminIniciarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIniciarSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminIniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

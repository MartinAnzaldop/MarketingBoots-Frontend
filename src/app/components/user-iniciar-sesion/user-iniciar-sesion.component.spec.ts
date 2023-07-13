import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIniciarSesionComponent } from './user-iniciar-sesion.component';

describe('UserIniciarSesionComponent', () => {
  let component: UserIniciarSesionComponent;
  let fixture: ComponentFixture<UserIniciarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIniciarSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

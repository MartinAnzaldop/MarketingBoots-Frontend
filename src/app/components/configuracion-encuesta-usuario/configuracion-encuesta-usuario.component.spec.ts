import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionEncuestaUsuarioComponent } from './configuracion-encuesta-usuario.component';

describe('ConfiguracionEncuestaUsuarioComponent', () => {
  let component: ConfiguracionEncuestaUsuarioComponent;
  let fixture: ComponentFixture<ConfiguracionEncuestaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionEncuestaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionEncuestaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

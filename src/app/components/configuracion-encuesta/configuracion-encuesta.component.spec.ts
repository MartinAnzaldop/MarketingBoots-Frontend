import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionEncuestaComponent } from './configuracion-encuesta.component';

describe('ConfiguracionEncuestaComponent', () => {
  let component: ConfiguracionEncuestaComponent;
  let fixture: ComponentFixture<ConfiguracionEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionEncuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConfiguracionEncuestaComponent } from './editar-configuracion-encuesta.component';

describe('EditarConfiguracionEncuestaComponent', () => {
  let component: EditarConfiguracionEncuestaComponent;
  let fixture: ComponentFixture<EditarConfiguracionEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConfiguracionEncuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarConfiguracionEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

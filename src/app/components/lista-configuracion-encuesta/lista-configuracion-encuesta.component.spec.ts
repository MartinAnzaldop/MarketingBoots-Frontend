import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConfiguracionEncuestaComponent } from './lista-configuracion-encuesta.component';

describe('ListaConfiguracionEncuestaComponent', () => {
  let component: ListaConfiguracionEncuestaComponent;
  let fixture: ComponentFixture<ListaConfiguracionEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConfiguracionEncuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaConfiguracionEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

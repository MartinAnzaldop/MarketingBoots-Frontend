import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasSeleccionadasComponent } from './preguntas-seleccionadas.component';

describe('PreguntasSeleccionadasComponent', () => {
  let component: PreguntasSeleccionadasComponent;
  let fixture: ComponentFixture<PreguntasSeleccionadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasSeleccionadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasSeleccionadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

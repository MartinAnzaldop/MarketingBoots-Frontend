import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreguntasSeleccionadasComponent } from './lista-preguntas-seleccionadas.component';

describe('ListaPreguntasSeleccionadasComponent', () => {
  let component: ListaPreguntasSeleccionadasComponent;
  let fixture: ComponentFixture<ListaPreguntasSeleccionadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPreguntasSeleccionadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPreguntasSeleccionadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRespuestasEncuestasComponent } from './lista-respuestas-encuestas.component';

describe('ListaRespuestasEncuestasComponent', () => {
  let component: ListaRespuestasEncuestasComponent;
  let fixture: ComponentFixture<ListaRespuestasEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRespuestasEncuestasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRespuestasEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

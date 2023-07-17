import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasSeleccionadasUserComponent } from './preguntas-seleccionadas-user.component';

describe('PreguntasSeleccionadasUserComponent', () => {
  let component: PreguntasSeleccionadasUserComponent;
  let fixture: ComponentFixture<PreguntasSeleccionadasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasSeleccionadasUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasSeleccionadasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

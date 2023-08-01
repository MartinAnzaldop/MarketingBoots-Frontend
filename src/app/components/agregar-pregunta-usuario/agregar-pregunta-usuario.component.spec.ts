import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPreguntaUsuarioComponent } from './agregar-pregunta-usuario.component';

describe('AgregarPreguntaUsuarioComponent', () => {
  let component: AgregarPreguntaUsuarioComponent;
  let fixture: ComponentFixture<AgregarPreguntaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPreguntaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPreguntaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

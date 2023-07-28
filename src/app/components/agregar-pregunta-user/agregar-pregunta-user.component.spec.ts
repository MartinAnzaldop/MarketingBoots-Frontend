import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPreguntaUserComponent } from './agregar-pregunta-user.component';

describe('AgregarPreguntaUserComponent', () => {
  let component: AgregarPreguntaUserComponent;
  let fixture: ComponentFixture<AgregarPreguntaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPreguntaUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPreguntaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

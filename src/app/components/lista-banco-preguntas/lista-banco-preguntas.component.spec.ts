import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBancoPreguntasComponent } from './lista-banco-preguntas.component';

describe('ListaBancoPreguntasComponent', () => {
  let component: ListaBancoPreguntasComponent;
  let fixture: ComponentFixture<ListaBancoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBancoPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBancoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

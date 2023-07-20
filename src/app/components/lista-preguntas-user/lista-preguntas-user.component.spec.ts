import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreguntasUserComponent } from './lista-preguntas-user.component';

describe('ListaPreguntasUserComponent', () => {
  let component: ListaPreguntasUserComponent;
  let fixture: ComponentFixture<ListaPreguntasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPreguntasUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPreguntasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

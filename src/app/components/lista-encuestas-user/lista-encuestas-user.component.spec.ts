import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncuestasUserComponent } from './lista-encuestas-user.component';

describe('ListaEncuestasUserComponent', () => {
  let component: ListaEncuestasUserComponent;
  let fixture: ComponentFixture<ListaEncuestasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEncuestasUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEncuestasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

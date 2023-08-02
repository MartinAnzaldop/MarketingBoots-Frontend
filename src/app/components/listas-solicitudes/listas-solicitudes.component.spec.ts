import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasSolicitudesComponent } from './listas-solicitudes.component';

describe('ListasSolicitudesComponent', () => {
  let component: ListasSolicitudesComponent;
  let fixture: ComponentFixture<ListasSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasSolicitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

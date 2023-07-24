import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncuestasAdminComponent } from './lista-encuestas-admin.component';

describe('ListaEncuestasAdminComponent', () => {
  let component: ListaEncuestasAdminComponent;
  let fixture: ComponentFixture<ListaEncuestasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEncuestasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEncuestasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesEncuestasAdminComponent } from './solicitudes-encuestas-admin.component';

describe('SolicitudesEncuestasAdminComponent', () => {
  let component: SolicitudesEncuestasAdminComponent;
  let fixture: ComponentFixture<SolicitudesEncuestasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesEncuestasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesEncuestasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

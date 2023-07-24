import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesEncuestasComponent } from './solicitudes-encuestas.component';

describe('SolicitudesEncuestasComponent', () => {
  let component: SolicitudesEncuestasComponent;
  let fixture: ComponentFixture<SolicitudesEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesEncuestasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

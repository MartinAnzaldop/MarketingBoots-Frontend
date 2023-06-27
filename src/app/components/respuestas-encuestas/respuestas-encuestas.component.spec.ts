import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasEncuestasComponent } from './respuestas-encuestas.component';

describe('RespuestasEncuestasComponent', () => {
  let component: RespuestasEncuestasComponent;
  let fixture: ComponentFixture<RespuestasEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasEncuestasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

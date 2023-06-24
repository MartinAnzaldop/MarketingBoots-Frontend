import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaConfiguradaComponent } from './encuesta-configurada.component';

describe('EncuestaConfiguradaComponent', () => {
  let component: EncuestaConfiguradaComponent;
  let fixture: ComponentFixture<EncuestaConfiguradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaConfiguradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaConfiguradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

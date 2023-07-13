import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResultadoEncuestaComponent } from './user-resultado-encuesta.component';

describe('UserResultadoEncuestaComponent', () => {
  let component: UserResultadoEncuestaComponent;
  let fixture: ComponentFixture<UserResultadoEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserResultadoEncuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserResultadoEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

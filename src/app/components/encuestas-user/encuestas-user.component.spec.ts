import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasUserComponent } from './encuestas-user.component';

describe('EncuestasUserComponent', () => {
  let component: EncuestasUserComponent;
  let fixture: ComponentFixture<EncuestasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestasUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

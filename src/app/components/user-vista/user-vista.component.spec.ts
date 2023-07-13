import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVistaComponent } from './user-vista.component';

describe('UserVistaComponent', () => {
  let component: UserVistaComponent;
  let fixture: ComponentFixture<UserVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

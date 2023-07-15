import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarUserComponent } from './nabvar-user.component';

describe('NabvarUserComponent', () => {
  let component: NabvarUserComponent;
  let fixture: ComponentFixture<NabvarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabvarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

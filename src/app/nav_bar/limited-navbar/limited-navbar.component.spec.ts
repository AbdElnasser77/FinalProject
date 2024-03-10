import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedNavbarComponent } from './limited-navbar.component';

describe('LimitedNavbarComponent', () => {
  let component: LimitedNavbarComponent;
  let fixture: ComponentFixture<LimitedNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitedNavbarComponent]
    });
    fixture = TestBed.createComponent(LimitedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProducutsComponent } from './feature-producuts.component';

describe('FeatureProducutsComponent', () => {
  let component: FeatureProducutsComponent;
  let fixture: ComponentFixture<FeatureProducutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureProducutsComponent]
    });
    fixture = TestBed.createComponent(FeatureProducutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

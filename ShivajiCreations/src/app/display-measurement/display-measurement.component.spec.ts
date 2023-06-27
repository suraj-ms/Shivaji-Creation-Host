import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMeasurementComponent } from './display-measurement.component';

describe('DisplayMeasurementComponent', () => {
  let component: DisplayMeasurementComponent;
  let fixture: ComponentFixture<DisplayMeasurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMeasurementComponent]
    });
    fixture = TestBed.createComponent(DisplayMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeasurementComponent } from './edit-measurement.component';

describe('EditMeasurementComponent', () => {
  let component: EditMeasurementComponent;
  let fixture: ComponentFixture<EditMeasurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMeasurementComponent]
    });
    fixture = TestBed.createComponent(EditMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

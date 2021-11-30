import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConceptStepperComponent } from './update-concept-stepper.component';

describe('UpdateConceptStepperComponent', () => {
  let component: UpdateConceptStepperComponent;
  let fixture: ComponentFixture<UpdateConceptStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConceptStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConceptStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

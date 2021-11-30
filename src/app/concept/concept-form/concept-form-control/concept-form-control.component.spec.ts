import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptFormControlComponent } from './concept-form-control.component';

describe('ConceptFormControlComponent', () => {
  let component: ConceptFormControlComponent;
  let fixture: ComponentFixture<ConceptFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

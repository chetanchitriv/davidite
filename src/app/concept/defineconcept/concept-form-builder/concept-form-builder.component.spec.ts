import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptFormBuilderComponent } from './concept-form-builder.component';

describe('ConceptFormBuilderComponent', () => {
  let component: ConceptFormBuilderComponent;
  let fixture: ComponentFixture<ConceptFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

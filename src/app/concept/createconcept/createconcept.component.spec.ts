import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConceptComponent } from './createconcept.component';

describe('ConceptdetailComponent', () => {
  let component: CreateConceptComponent;
  let fixture: ComponentFixture<CreateConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

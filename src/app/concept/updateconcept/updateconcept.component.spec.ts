import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconceptComponent } from './updateconcept.component';

describe('UpdateconceptComponent', () => {
  let component: UpdateconceptComponent;
  let fixture: ComponentFixture<UpdateconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateconceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

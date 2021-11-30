import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineconceptComponent } from './defineconcept.component';

describe('DefineconceptComponent', () => {
  let component: DefineconceptComponent;
  let fixture: ComponentFixture<DefineconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineconceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

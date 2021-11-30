import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineSolutionComponent } from './define-solution.component';

describe('DefineSolutionComponent', () => {
  let component: DefineSolutionComponent;
  let fixture: ComponentFixture<DefineSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

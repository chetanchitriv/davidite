import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinesolutionsComponent } from './definesolutions.component';

describe('DefinesolutionsComponent', () => {
  let component: DefinesolutionsComponent;
  let fixture: ComponentFixture<DefinesolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinesolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinesolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

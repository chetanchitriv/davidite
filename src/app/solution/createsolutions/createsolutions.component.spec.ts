import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesolutionsComponent } from './createsolutions.component';

describe('CreatesolutionsComponent', () => {
  let component: CreatesolutionsComponent;
  let fixture: ComponentFixture<CreatesolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

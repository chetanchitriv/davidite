import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinestepsComponent } from './definesteps.component';

describe('DefinestepsComponent', () => {
  let component: DefinestepsComponent;
  let fixture: ComponentFixture<DefinestepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinestepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinestepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

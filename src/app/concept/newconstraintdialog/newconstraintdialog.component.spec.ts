import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconstraintdialogComponent } from './newconstraintdialog.component';

describe('NewconstraintdialogComponent', () => {
  let component: NewconstraintdialogComponent;
  let fixture: ComponentFixture<NewconstraintdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewconstraintdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewconstraintdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconstraintdialogComponent } from './addconstraintdialog.component';

describe('AddconstraintdialogComponent', () => {
  let component: AddconstraintdialogComponent;
  let fixture: ComponentFixture<AddconstraintdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddconstraintdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconstraintdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

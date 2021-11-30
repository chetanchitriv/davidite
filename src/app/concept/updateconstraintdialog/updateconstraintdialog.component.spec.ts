import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconstraintdialogComponent } from './updateconstraintdialog.component';

describe('UpdateconstraintdialogComponent', () => {
  let component: UpdateconstraintdialogComponent;
  let fixture: ComponentFixture<UpdateconstraintdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateconstraintdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateconstraintdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

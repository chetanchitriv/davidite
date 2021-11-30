import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetermconstraintdialogComponent } from './updatetermconstraintdialog.component';

describe('UpdatetermconstraintdialogComponent', () => {
  let component: UpdatetermconstraintdialogComponent;
  let fixture: ComponentFixture<UpdatetermconstraintdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetermconstraintdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetermconstraintdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconditiondialogComponent } from './newconditiondialog.component';

describe('NewconditiondialogComponent', () => {
  let component: NewconditiondialogComponent;
  let fixture: ComponentFixture<NewconditiondialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewconditiondialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewconditiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

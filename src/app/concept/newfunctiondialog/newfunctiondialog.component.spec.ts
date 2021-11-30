import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfunctiondialogComponent } from './newfunctiondialog.component';

describe('NewfunctiondialogComponent', () => {
  let component: NewfunctiondialogComponent;
  let fixture: ComponentFixture<NewfunctiondialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfunctiondialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfunctiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

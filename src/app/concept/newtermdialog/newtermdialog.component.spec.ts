import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtermdialogComponent } from './newtermdialog.component';

describe('NewtermdialogComponent', () => {
  let component: NewtermdialogComponent;
  let fixture: ComponentFixture<NewtermdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtermdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtermdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

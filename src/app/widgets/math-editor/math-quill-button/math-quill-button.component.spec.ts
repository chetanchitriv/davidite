import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathQuillButtonComponent } from './math-quill-button.component';

describe('MathQuillButtonComponent', () => {
  let component: MathQuillButtonComponent;
  let fixture: ComponentFixture<MathQuillButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathQuillButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathQuillButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

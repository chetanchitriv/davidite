import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestepComponent } from './createstep.component';

describe('CreatestepComponent', () => {
  let component: CreatestepComponent;
  let fixture: ComponentFixture<CreatestepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

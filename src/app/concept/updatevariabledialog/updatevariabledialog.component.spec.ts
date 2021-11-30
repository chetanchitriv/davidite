import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevariabledialogComponent } from './updatevariabledialog.component';

describe('UpdatevariabledialogComponent', () => {
  let component: UpdatevariabledialogComponent;
  let fixture: ComponentFixture<UpdatevariabledialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevariabledialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevariabledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

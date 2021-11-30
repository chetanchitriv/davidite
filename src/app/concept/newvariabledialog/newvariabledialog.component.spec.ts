import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvariabledialogComponent } from './newvariabledialog.component';

describe('NewvariabledialogComponent', () => {
  let component: NewvariabledialogComponent;
  let fixture: ComponentFixture<NewvariabledialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvariabledialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvariabledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

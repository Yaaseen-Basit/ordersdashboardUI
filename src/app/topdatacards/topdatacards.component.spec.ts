import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdatacardsComponent } from './topdatacards.component';

describe('TopdatacardsComponent', () => {
  let component: TopdatacardsComponent;
  let fixture: ComponentFixture<TopdatacardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopdatacardsComponent]
    });
    fixture = TestBed.createComponent(TopdatacardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

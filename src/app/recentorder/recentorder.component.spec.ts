import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentorderComponent } from './recentorder.component';

describe('RecentorderComponent', () => {
  let component: RecentorderComponent;
  let fixture: ComponentFixture<RecentorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentorderComponent]
    });
    fixture = TestBed.createComponent(RecentorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

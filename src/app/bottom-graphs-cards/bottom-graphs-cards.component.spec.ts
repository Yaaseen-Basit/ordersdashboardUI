import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomGraphsCardsComponent } from './bottom-graphs-cards.component';

describe('BottomGraphsCardsComponent', () => {
  let component: BottomGraphsCardsComponent;
  let fixture: ComponentFixture<BottomGraphsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomGraphsCardsComponent]
    });
    fixture = TestBed.createComponent(BottomGraphsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

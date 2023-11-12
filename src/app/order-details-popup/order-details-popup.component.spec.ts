import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsPopupComponent } from './order-details-popup.component';

describe('OrderDetailsPopupComponent', () => {
  let component: OrderDetailsPopupComponent;
  let fixture: ComponentFixture<OrderDetailsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailsPopupComponent]
    });
    fixture = TestBed.createComponent(OrderDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

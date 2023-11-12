import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsPopupComponent } from '../order-details-popup/order-details-popup.component'; // Replace with the correct path
// declare const $: any; 
import { ApiService } from '../api.service';
import{TagComponent} from '../tag/tag.component';

@Component({
  selector: 'app-recentorder',
  templateUrl: './recentorder.component.html',
  styleUrls: ['./recentorder.component.css']
})
export class RecentorderComponent {
  @Input() order: any;

  constructor(private dialog: MatDialog,private apiService: ApiService) {

  }
  recentOrders: any[] = [];


  ngOnInit() {
    this.apiService.getRecentOrders().subscribe((data: any) => {
      this.recentOrders = data.recent_orders;
      // this.recentOrders = Object.values(data);
      console.log(" this.recentOrders >>>>> ", this.recentOrders )

    });
  }
  
  showPopup(order: any): void {
    var dialogRef = this.dialog.open(OrderDetailsPopupComponent, {
      width: '500px',
      data: {
        customerName: order.name,
        productName: order.product,
        // Add more data as needed
      },
    });
  }
  // showPopup(order: any): void {
  //   $('#orderDetailsModal').modal('show'); // Trigger the Bootstrap modal
  // }
  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'status-pending';
      case 'Failed':
        return 'status-failed';
      case 'Paid':
        return 'status-paid';
      default:
        return 'status-default';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'Pending':
        return 'Pending';
      case 'Failed':
        return 'Failed';
      case 'Paid':
        return 'Paid';
      default:
        return 'Unknown';
    }
  }
    


}

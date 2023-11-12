import { Component,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-details-popup',
  templateUrl: './order-details-popup.component.html',
  styleUrls: ['./order-details-popup.component.css']
})
export class OrderDetailsPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<OrderDetailsPopupComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

}

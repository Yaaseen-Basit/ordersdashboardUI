import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() order: any;

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

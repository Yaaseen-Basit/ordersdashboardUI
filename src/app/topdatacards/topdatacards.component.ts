import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-topdatacards',
  templateUrl: './topdatacards.component.html',
  styleUrls: ['./topdatacards.component.css']
})
export class TopdatacardsComponent {
  topCards: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTopDataCards().subscribe((data:any) => {
      this.topCards = data.top_cards;
      console.log(" this.topCards@@@ ", this.topCards )

    });
  }
  getBackgroundColor(value: number): string {
    if (value === 15) {
      return '#506de2';
    } else {
      return 'white';
    }
  }
  getFontColor(value: number): string {
    if (value === 15) {
      return 'white';
    } else {
      return '#506de2';
    }
  }
}

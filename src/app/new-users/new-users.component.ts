import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent {
  newUsers: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/new_users').subscribe((data: any) => {
      this.newUsers = data.new_users;
      console.log(" this.newUsers UUUUU", this.newUsers )

    });
  }
}

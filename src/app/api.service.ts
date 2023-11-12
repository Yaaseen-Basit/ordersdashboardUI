import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://1.api.fy23ey05.careers.ifelsecloud.com'; // Set your API base URL here

  constructor(private http: HttpClient) {}

  getTopDataCards(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/top_cards`);
  }

  getNewUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/new_users`);
  }

  getRecentOrders(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recent_orders`);
  }}

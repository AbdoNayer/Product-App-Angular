import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private dataProducts = environment.dataProducts;
  private dataOrders = environment.dataOrders;
  private dataUsers = environment.dataUsers;

  constructor(private http: HttpClient) {}

  // Get Products
  getProducts(): Observable<any> {
    return this.http.get<any>(this.dataProducts);
  }

  // Get Orders
  getOrders(): Observable<any> {
    return this.http.get<any>(this.dataOrders);
  }

  // Get Users
  getUsers(): Observable<any> {
    return this.http.get<any>(this.dataUsers);
  }
}

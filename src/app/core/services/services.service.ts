import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private dataProducts = environment.dataProducts;
  private dataOrders = environment.dataOrders;
  private dataUsers = environment.dataUsers;

  counterValue = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('counter') || '0')
    : 0;
  counter: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.counterValue
  );

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

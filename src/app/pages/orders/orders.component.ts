import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServicesService } from '../../core/services/services.service';
import { Orders } from '../../core/models/orders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  // Items Orders BehaviorSubject
  itemsOrders = new BehaviorSubject<Orders[]>([]);
  // Items Orders BehaviorSubject
  itemsProducts = new BehaviorSubject<any>([]);
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get List Orders
    this.getOrders();
    // Get List Products
    this.getProductsData();
  }

  // Get List Orders
  getOrders(): void {
    this.servicesService.getOrders().subscribe({
      next: (response) => {
        this.itemsOrders.next(response);
      },
    });
  }

  // Get List Products
  getProductsData(): void {
    this.servicesService.getProducts().subscribe({
      next: (response) => {
        this.itemsProducts.next(response);
      },
    });
  }

  // Get Paginated Orders
  get paginatedOrders() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.itemsOrders.getValue().slice(start, end);
  }

  // Change Page Paginated Orders
  changePage(page: number): void {
    this.currentPage = page;
  }

  // Calculate Total Price
  calculateTotalPrice(
    products: { ProductId: number; Quantity: number }[]
  ): number {
    return products.reduce((total, product) => {
      const productDetails = this.itemsProducts
        .getValue()
        .find((p: any) => p.ProductId === product.ProductId);
      const productPrice = productDetails ? productDetails.ProductPrice : 0;
      return total + productPrice * product.Quantity;
    }, 0);
  }

  viewOrderDetails(order: any): void {
    this.router.navigate(['/order', order.OrderId], {
      queryParams: { orderData: JSON.stringify(order) },
    });
  }

  // Delete Order
  deleteOrder(orderId: any): void {
    const orders = this.itemsOrders.getValue();
    const index = orders.findIndex((order) => order.OrderId === orderId);
    orders.splice(index, 1);
    this.itemsOrders.next(orders);
  }
}

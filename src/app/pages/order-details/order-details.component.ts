import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../core/services/services.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent {
  orderData: any;
  userData: any;
  productsData: any;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    // Get Order Data
    this.getOrderData();
    // Get User By Order ID
    this.getUserByOrderId();
    // Get Products By Order ID
    this.getProductsByOrderId();
  }

  // Get Order Data
  getOrderData() {
    this.route.queryParamMap.subscribe((params) => {
      const orderString = params.get('orderData');
      this.orderData = orderString ? JSON.parse(orderString) : null;
      console.log(this.orderData);
    });
  }

  // Get Order by ID
  getUserByOrderId() {
    const userId = this.orderData.UserId;
    this.servicesService.getUsers().subscribe({
      next: (response) => {
        const user = response.find((user: any) => user.Id === userId);
        this.userData = user;
        console.log(this.userData);
      },
    });
  }

  // Get Products by Order ID
  getProductsByOrderId() {
    const productsByOrder = this.orderData.Products;
    this.servicesService.getProducts().subscribe({
      next: (response) => {
        // Filter and map the products with additional quantity property
        const products = response
          .filter((product: any) =>
            productsByOrder.some(
              (productByOrder: any) =>
                productByOrder.ProductId === product.ProductId
            )
          )
          .map((product: any) => {
            // Find the quantity from productsByOrder and add it to the product object
            const matchingOrderProduct = productsByOrder.find(
              (productByOrder: any) =>
                productByOrder.ProductId === product.ProductId
            );
            return {
              ...product,
              Quantity: matchingOrderProduct.Quantity,
            };
          });

        this.productsData = products;
        console.log(this.productsData);
      },
    });
  }
}

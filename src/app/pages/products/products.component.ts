import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServicesService } from '../../core/services/services.service';
import { Products } from '../../core/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  // Items Orders BehaviorSubject
  itemsProducts = new BehaviorSubject<Products[]>([]);

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    // Get List Products
    this.getProductsData();
  }

  // Get List Products
  getProductsData(): void {
    this.servicesService.getProducts().subscribe({
      next: (response) => {
        this.itemsProducts.next(response);
      },
    });
  }
}

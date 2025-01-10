import { Component } from '@angular/core';
import { ServicesService } from '../../core/services/services.service';
import { ToasterService } from '../../shared/services/toaster.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  // Cart Products
  cartProducts: any[] = JSON.parse(localStorage.getItem('cart') || '[]');

  constructor(
    private toasterService: ToasterService,
    private servicesService: ServicesService
  ) {}

  // Remove Item From Cart
  onRemoveItem(item: any): void {
    this.cartProducts = this.cartProducts.filter(
      (product) => product.ProductId !== item.ProductId
    );
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    localStorage.setItem('counter', JSON.stringify(this.cartProducts.length));
    this.servicesService.counter.next(this.cartProducts.length);
    this.toasterService.success('Item removed from cart', 'success');
  }

  // Remove All Cart
  removeAllCart(): void {
    this.cartProducts = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    localStorage.setItem('counter', JSON.stringify(this.cartProducts.length));
    this.servicesService.counter.next(this.cartProducts.length);
    this.toasterService.success('Cart cleared', 'success');
  }
}

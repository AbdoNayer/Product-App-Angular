import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../../../core/models/products';
import { ToasterService } from '../../../../shared/services/toaster.service';
import { ServicesService } from '../../../../core/services/services.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.scss',
})
export class ItemProductComponent implements OnInit {
  @Input() item!: Products;
  quantity: number = 1;

  constructor(
    private toasterService: ToasterService,
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {}

  increaseQuantity() {
    if (this.quantity < Number(this.item.AvailablePieces)) {
      this.quantity++;
    } else {
      this.toasterService.error(
        'Error',
        'You can not add more than available pieces'
      );
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    const productToAdd = {
      ...this.item,
      quantity: this.quantity,
    };
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(
      (product: any) => product.ProductId === productToAdd.ProductId
    );
    if (productIndex !== -1) {
      cart[productIndex].quantity = this.quantity;
    } else {
      cart.push(productToAdd);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('counter', JSON.stringify(cart.length));
    this.servicesService.counter.next(cart.length);

    this.toasterService.success('Success', 'Product Added To Cart');
    console.log('productToAdd', productToAdd);
  }
}

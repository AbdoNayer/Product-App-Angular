import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../../../core/models/products';
import { ToasterService } from '../../../../shared/services/toaster.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.scss',
})
export class ItemProductComponent implements OnInit {
  @Input() item!: Products;
  quantity: number = 1;

  constructor(private toasterService: ToasterService) {}

  ngOnInit(): void {}

  increaseQuantity() {
    if (this.quantity < Number(this.item.AvailablePieces)) {
      this.quantity++;
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
    console.log('productToAdd', productToAdd);
    this.toasterService.error('helloi');
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ItemProductComponent } from './components/item-product/item-product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent, ItemProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}

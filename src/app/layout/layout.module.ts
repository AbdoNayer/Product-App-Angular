import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../pages/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../pages/orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: 'order/:id',
        loadChildren: () =>
          import('../pages/order-details/order-details.module').then(
            (m) => m.OrderDetailsModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../pages/cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LayoutModule {}

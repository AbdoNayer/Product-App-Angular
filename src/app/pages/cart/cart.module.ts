import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { EmptyDataComponent } from '../../shared/components/empty-data/empty-data.component';

export const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, EmptyDataComponent, RouterModule.forChild(routes)],
})
export class CartModule {}

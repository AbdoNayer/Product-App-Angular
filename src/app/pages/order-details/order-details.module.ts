import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: OrderDetailsComponent,
  },
];

@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrderDetailsModule {}

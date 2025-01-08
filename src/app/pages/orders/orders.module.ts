import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { EmptyDataComponent } from "../../shared/components/empty-data/empty-data.component";

export const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), EmptyDataComponent],
})
export class OrdersModule {}

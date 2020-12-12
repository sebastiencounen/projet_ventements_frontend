import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageOrdersComponent} from './components/manage-orders/manage-orders.component';
import {ListOrdersComponent} from './components/list-orders/list-orders.component';

const routes: Routes = [
  { path: 'orders', component: ManageOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  static components = [
    ManageOrdersComponent,
    ListOrdersComponent
  ]
}

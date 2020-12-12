import { Component, OnInit } from '@angular/core';
import {Orders} from '../../types/order';
import {OrdersServerService} from '../../repositories/orders-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent implements OnInit {

  orders: Orders = [];

  constructor(private ordersService: OrdersServerService,
              private manageTokenService: ManageUserTokenService) { }

  ngOnInit(): void {
    this.initOrders();
  }

  private initOrders() {
    const userId = this.manageTokenService.getUserIdViaToken();

    if (userId) {
      return this.ordersService
        .getOrders(userId)
        .subscribe(orders => this.orders = orders);
    }
  }

}

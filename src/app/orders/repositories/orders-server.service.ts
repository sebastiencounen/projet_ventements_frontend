import { Injectable } from '@angular/core';
import {OrdersRepository} from './orders-repository';
import {Order, Orders} from '../types/order';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {OrderedItem, OrderedItems} from '../types/ordered-item';

@Injectable({
  providedIn: 'root'
})
export class OrdersServerService implements OrdersRepository {

  private static readonly URL_USERS: string = environment.serverAddress + '/users';
  private static readonly URL_ORDERS: string = environment.serverAddress + '/orders';

  constructor(private httpClient: HttpClient) { }

  getOrders(userId: number): Observable<Orders> {
    return this.httpClient.get<Orders>(
      `${OrdersServerService.URL_USERS}/${userId}/orders`
    );
  }

  createOrder(userId: number): Observable<Order> {
    return this.httpClient.post<Order>(`${OrdersServerService.URL_USERS}/${userId}/orders`, {});
  }

  addOrderedItems(orderId: number, orderedItems: Order): Observable<OrderedItem> {
    return this.httpClient.post<any>(
      `${OrdersServerService.URL_ORDERS}/${orderId}/orderedItems`, orderedItems
    );
  }
}

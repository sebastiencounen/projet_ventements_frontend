import {Observable} from 'rxjs';
import {Order, Orders} from '../types/order';
import {OrderedItem, OrderedItems} from '../types/ordered-item';

export interface OrdersRepository {
  getOrders(userId: number): Observable<Orders>;

  createOrder(userId: number): Observable<Order>;

  addOrderedItems(orderId: number, orderedItems: Order): Observable<OrderedItem>;
}

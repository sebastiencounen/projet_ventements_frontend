import {Observable} from 'rxjs';
import {Order, Orders} from '../types/order';
import {OrderedItems} from '../types/ordered-item';

export interface OrdersRepository {
  getOrders(userId: number): Observable<Orders>;

  createOrder(userId: number): Observable<Order>;

  addOrderedItems(orderId: number, orderedItems: OrderedItems): Observable<any>;
}

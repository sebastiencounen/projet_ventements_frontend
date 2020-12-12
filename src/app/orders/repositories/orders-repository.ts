import {Observable} from 'rxjs';
import {Orders} from '../types/order';

export interface OrdersRepository {
  getOrders(userId: number): Observable<Orders>;
}

import { Injectable } from '@angular/core';
import {OrdersRepository} from './orders-repository';
import {Orders} from '../types/order';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

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
}

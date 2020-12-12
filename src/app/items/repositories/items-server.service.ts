import { Injectable } from '@angular/core';
import {ItemsRepository} from './items-repository';
import {Observable} from 'rxjs';
import {Item, Items} from '../types/item';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Reviews} from '../types/review';

@Injectable({
  providedIn: 'root'
})
export class ItemsServerService implements ItemsRepository {

  private static readonly URL: string = environment.serverAddress;

  constructor(private httpClient: HttpClient) { }

  getItemsByCategoryId(idCategory: number): Observable<Items> {
    return this.httpClient.get<Items>(
      ItemsServerService.URL + '/categories/' + idCategory + '/items'
    );
  }

  getItemById(id: number): Observable<Item> {
    return this.httpClient.get<Item>(ItemsServerService.URL + '/items/' + id);
  }

  getReviews(idItem: number): Observable<Reviews> {
    return this.httpClient.get<Reviews>(
      ItemsServerService.URL + '/items/' + idItem + '/reviews'
    );
  }

  addItem(categoryId: number, item: Item): Observable<Item> {
    return this.httpClient.post<Item>(ItemsServerService.URL + '/categories/' + categoryId + '/items', item);
  }
}

import { Injectable } from '@angular/core';
import {ItemsRepository} from './items-repository';
import {Observable} from 'rxjs';
import {Item, Items} from '../types/item';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

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
}

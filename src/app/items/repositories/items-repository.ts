import {Observable} from 'rxjs';
import {Item, Items} from '../types/item';

export interface ItemsRepository {
  getItemsByCategoryId(idCategory: number): Observable<Items>;

  getItemById(id: number): Observable<Item>;

  // getReviews(idItem: number): Observable<any>;
}

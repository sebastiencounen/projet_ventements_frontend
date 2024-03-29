import {Observable} from 'rxjs';
import {Item, Items} from '../types/item';
import {Reviews} from '../types/review';

export interface ItemsRepository {
  query(): Observable<Items>;

  getItemsByCategoryId(idCategory: number): Observable<Items>;

  getItemById(id: number): Observable<Item>;

  getReviews(idItem: number): Observable<Reviews>;

  addItem(categoryId: number, item: Item): Observable<Item>;

  deleteItem(itemId: number): Observable<any>;
}

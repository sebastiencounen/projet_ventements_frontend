import {Observable} from 'rxjs';
import {Items} from '../types/item';

export interface ItemsRepository {
  getItemsByCategoryId(idCategory: number): Observable<Items>;
}

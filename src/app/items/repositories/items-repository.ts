import {Observable} from 'rxjs';
import {Items} from '../types/item';

export interface ItemsRepository {
  query(): Observable<Items>;
}

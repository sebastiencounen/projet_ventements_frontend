import {Observable} from 'rxjs';
import {Bag} from '../types/bag';

export interface BagRepository {
  getUserBag(): Observable<Bag>;
}

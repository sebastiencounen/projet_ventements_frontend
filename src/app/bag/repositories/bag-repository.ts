import {Observable} from 'rxjs';
import {Bag} from '../types/bag';

export interface BagRepository {
  getUserBag(userId: number): Observable<Bag>;

  deleteItemFromBag(baggedItemId: number): Observable<any>;
}

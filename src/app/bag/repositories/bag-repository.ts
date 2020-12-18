import {Observable} from 'rxjs';
import {Bag} from '../types/bag';
import {BaggedItem} from '../types/bagged-item';

export interface BagRepository {
  getUserBag(userId: number): Observable<Bag>;

  deleteItemFromBag(baggedItemId: number): Observable<any>;

  addItemToBag(userId: number, baggedItem: BaggedItem): Observable<BaggedItem>;

  emptyBag(userId: number): Observable<any>;

  updateQuantity(baggedItem: BaggedItem): Observable<any>;
}

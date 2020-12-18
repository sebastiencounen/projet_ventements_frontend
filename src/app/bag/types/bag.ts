import {User} from '../../users/types/user';
import {BaggedItems} from './bagged-item';

export interface Bag {
  bagOwner?: User;
  totalPrice: number;
  items: BaggedItems;
}

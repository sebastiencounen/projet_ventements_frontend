import {User} from '../../users/types/user';
import {OrderedItems} from './ordered-item';

export interface Order {
  id?: number;
  isPaid?: boolean;
  orderedAt?: Date;
  totalPrice: number;
  ordered?: User;
  orderedItems?: OrderedItems;
}

export declare type Orders = Order[];

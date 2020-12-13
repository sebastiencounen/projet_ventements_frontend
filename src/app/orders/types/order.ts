import {User} from '../../users/types/user';
import {Items} from '../../items/types/item';

export interface Order {
  id?: number;
  isPaid?: boolean;
  orderedAt?: Date;
  totalPrice?: number;
  ordered?: User;
  orderedItems?: Items;
}

export declare type Orders = Order[];

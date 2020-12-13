import {Order} from './order';
import {Item} from '../../items/types/item';

export interface OrderedItem {
  id?: number;
  itemOrder?: Order;
  itemOrdered?: Item;

  itemId?: number;
  quantity?: number;
  size?: string;
}

export declare type OrderedItems = OrderedItem[];

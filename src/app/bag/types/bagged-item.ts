import {Item} from '../../items/types/item';

export interface BaggedItem {
  id?: number;
  addedAt: Date;
  quantity: number;
  size: string;
  bagItem: Item;
}

export declare type BaggedItems = BaggedItem[];

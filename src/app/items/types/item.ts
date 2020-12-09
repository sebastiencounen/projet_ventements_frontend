import {Category} from '../../categories/types/category';

export interface Item {
  id?: number;
  label: string;
  price?: number;
  imageItem?: string;
  descriptionItem?: string;
  itemCategory?: Category;
}

export declare type Items = Item[];

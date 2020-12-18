import {Category} from '../../categories/types/category';

export interface Item {
  id?: number;
  label?: string;
  price?: number;
  imageItem?: string;
  descriptionItem?: string;
  itemCategory?: Category;

  quantity?: number;
  size?: string;
}

export declare type Items = Item[];

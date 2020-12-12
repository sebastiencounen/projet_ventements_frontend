export interface OrderedItem {
  id?: number;
  itemId?: number;
  label: string;
  price: number;
  imageItem?: string;
  descriptionItem?: string;
  quantity?: number;
  size?: string;
}

export declare type OrderedItems = OrderedItem[];

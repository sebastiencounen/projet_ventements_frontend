import {User} from '../../users/types/user';
import {Item} from '../../items/types/item';

export interface Wishlist {
  id?: number;
  addedAt?: Date;
  userWishList: User;
  itemWishList: Item;
}

export declare type Wishlists = Wishlist[];

import {Observable} from 'rxjs';
import {Wishlist, Wishlists} from '../types/wishlist';

export interface WishlistRepository {
  getUserWishlist(userId: number): Observable<Wishlists>;

  addItemToWishlist(userId: number, itemId: number): Observable<Wishlist>;

  deleteItemFromWishlist(id: number): Observable<any>;
}

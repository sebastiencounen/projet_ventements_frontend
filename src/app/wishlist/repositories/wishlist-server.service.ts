import {Injectable} from '@angular/core';
import {WishlistRepository} from './wishlist-repository';
import {Observable} from 'rxjs';
import {Wishlist, Wishlists} from '../types/wishlist';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistServerService implements WishlistRepository {

  private static readonly URL_USER: string = environment.serverAddress + '/users';
  private static readonly URL_WISHLIST: string = environment.serverAddress + '/wishlists';

  constructor(private httpClient: HttpClient) {
  }

  addItemToWishlist(userId: number, itemId: number): Observable<Wishlist> {
    return this.httpClient.post<Wishlist>(
      WishlistServerService.URL_USER + '/' + userId + '/wishlist/' + itemId, {});
  }

  deleteItemFromWishlist(id: number): Observable<any> {
    return this.httpClient.delete(WishlistServerService.URL_WISHLIST + '/' + id);
  }

  getUserWishlist(userId: number): Observable<Wishlists> {
    return this.httpClient.get<Wishlists>(WishlistServerService.URL_USER + '/' + userId + '/wishlist');
  }
}

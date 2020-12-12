import {Component, OnInit} from '@angular/core';
import {WishlistServerService} from '../../repositories/wishlist-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {Items} from '../../../items/types/item';
import {ElementToDelete} from '../../../common/types/element-to-delete';
import {Wishlist, Wishlists} from '../../types/wishlist';

@Component({
  selector: 'app-manage-wishlist',
  templateUrl: './manage-wishlist.component.html',
  styleUrls: ['./manage-wishlist.component.scss']
})
export class ManageWishlistComponent implements OnInit {

  wishlistItems: Wishlists = [];

  constructor(private wishlistService: WishlistServerService,
              private manageToken: ManageUserTokenService) {
  }

  ngOnInit(): void {
    this.initWishlist();
  }

  private initWishlist() {
    const userId = this.manageToken.getUserIdViaToken();

    if (userId) {
      this.wishlistService
        .getUserWishlist(userId)
        .subscribe(
          wishlistItems => this.wishlistItems = wishlistItems,
          err => console.log(err)
        );
    }
  }

  deleteWishlistItem(element: ElementToDelete<Wishlist>) {
    const WISHLIST_ITEM_TO_DELETE = () => this.wishlistItems.splice(element.index, 1);

    this.wishlistService
      .deleteItemFromWishlist(element.element.id)
      .subscribe(WISHLIST_ITEM_TO_DELETE);
  }
}

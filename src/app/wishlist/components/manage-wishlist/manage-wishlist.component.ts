import {Component, OnInit} from '@angular/core';
import {WishlistServerService} from '../../repositories/wishlist-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {Items} from '../../../items/types/item';

@Component({
  selector: 'app-manage-wishlist',
  templateUrl: './manage-wishlist.component.html',
  styleUrls: ['./manage-wishlist.component.scss']
})
export class ManageWishlistComponent implements OnInit {

  wishlistItems: Items = [];

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
          wishlistItems => this.wishlistItems = wishlistItems.map(wishlistItem => wishlistItem.itemWishList),
          err => console.log(err)
        );
    }
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item, Items} from '../../../items/types/item';
import {ElementToDelete} from '../../../common/types/element-to-delete';
import {Wishlist, Wishlists} from '../../types/wishlist';

@Component({
  selector: 'app-list-wishlist',
  templateUrl: './list-wishlist.component.html',
  styleUrls: ['./list-wishlist.component.scss']
})
export class ListWishlistComponent implements OnInit {

  @Input() wishlists: Wishlists;
  @Output() wishlistDeleted: EventEmitter<ElementToDelete<Wishlist>> = new EventEmitter<ElementToDelete<Wishlist>>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteWishlistItem(element: ElementToDelete<Wishlist>) {
    this.wishlistDeleted.emit(element);
  }
}

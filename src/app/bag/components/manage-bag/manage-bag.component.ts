import {Component, OnInit} from '@angular/core';
import {Bag} from '../../types/bag';
import {BagServerService} from '../../repositories/bag-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {ElementToDelete} from '../../../common/types/element-to-delete';
import {BaggedItem} from '../../types/bagged-item';

@Component({
  selector: 'app-manage-bag',
  templateUrl: './manage-bag.component.html',
  styleUrls: ['./manage-bag.component.scss']
})
export class ManageBagComponent implements OnInit {
  bag: Bag = {totalPrice: 0, items: []};

  constructor(private bagService: BagServerService, private manageToken: ManageUserTokenService) {
  }

  ngOnInit(): void {
    const userId = this.manageToken.getUserIdViaToken();
    this.bagService
      .getUserBag(userId)
      .subscribe(bag => this.bag = bag);
  }

  deleteBaggedItem(element: ElementToDelete<BaggedItem>) {
    this.bagService
      .deleteItemFromBag(element.element.id)
      .subscribe(_ => {
        this.bag.totalPrice -= element.element.bagItem.price;
        this.bag.items.splice(element.index, 1);
        console.log('Deleted successfully');
      }, err => console.log(err));
  }

  emptyBag() {
    const userId = this.manageToken.getUserIdViaToken();
    if (userId) {
      this.bagService
        .emptyBag(userId)
        .subscribe(_ => {
          this.bag.items.splice(0, this.bag.items.length);
          this.bag.totalPrice = 0;
        });
    }
  }

  updateBaggedItem(baggedItem: BaggedItem) {
    this.bagService
      .updateQuantity(baggedItem)
      .subscribe(
        _ => {
          const baggedItemFromList =
            this.bag.items.find(item => item.id === baggedItem.id);

          // update total price 1
          this.bag.totalPrice -= baggedItemFromList.bagItem.price;

          // Computing unit price
          const unitPrice = baggedItemFromList.bagItem.price / baggedItemFromList.quantity;

          // Update quantity
          baggedItemFromList.quantity = baggedItem.quantity;

          // Update price
          baggedItemFromList.bagItem.price = unitPrice * baggedItem.quantity;

          // update total price 2
          this.bag.totalPrice += unitPrice * baggedItem.quantity;
        },
        err => console.log(err)
      );
  }
}

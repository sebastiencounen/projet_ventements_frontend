import {Component, OnInit} from '@angular/core';
import {Bag} from '../../types/bag';
import {BagServerService} from '../../repositories/bag-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {ElementToDelete} from '../../../common/types/element-to-delete';
import {BaggedItem} from '../../types/bagged-item';
import {OrdersServerService} from '../../../orders/repositories/orders-server.service';
import {Order} from '../../../orders/types/order';
import {OrderedItem, OrderedItems} from '../../../orders/types/ordered-item';

@Component({
  selector: 'app-manage-bag',
  templateUrl: './manage-bag.component.html',
  styleUrls: ['./manage-bag.component.scss']
})
export class ManageBagComponent implements OnInit {
  bag: Bag = {totalPrice: 0, items: []};
  order: Order;

  constructor(private bagService: BagServerService,
              private manageToken: ManageUserTokenService,
              private orderService: OrdersServerService) {
  }

  ngOnInit(): void {
    this.initBag();
  }

  private initBag() {
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

  orderItems() {
    const userId = this.manageToken.getUserIdViaToken();

    if (userId) {
      const orderedItems: OrderedItems = [];

      this.bag.items.forEach(bagItem => {
        const orderItem: OrderedItem = {
          itemId: bagItem.bagItem.id,
          quantity: bagItem.quantity,
          size: bagItem.size
        };

        orderedItems.push(orderItem);
      });

      this.orderService
        .createOrder(userId)
        .subscribe(
          order => {
            this.order = order;
            this.orderService
              .addOrderedItems(order.id, orderedItems)
              .subscribe(response => console.log(response), err => console.log(err));
          }
        );

      console.log(orderedItems);
    }
  }
}

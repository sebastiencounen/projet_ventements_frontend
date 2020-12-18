import {Component, OnInit} from '@angular/core';
import {Bag} from '../../types/bag';
import {BagServerService} from '../../repositories/bag-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {ElementToDelete} from '../../../common/types/element-to-delete';
import {BaggedItem} from '../../types/bagged-item';
import {OrdersServerService} from '../../../orders/repositories/orders-server.service';
import {Order} from '../../../orders/types/order';
import {OrderedItem, OrderedItems} from '../../../orders/types/ordered-item';
import {switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-bag',
  templateUrl: './manage-bag.component.html',
  styleUrls: ['./manage-bag.component.scss']
})
export class ManageBagComponent implements OnInit {
  bag: Bag = {totalPrice: 0, items: []};
  order: Order;

  isSnackbarVisible: boolean = false;
  snackbarMessage: string;

  constructor(private bagService: BagServerService,
              private manageToken: ManageUserTokenService,
              private orderService: OrdersServerService,
              private router: Router) {
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
        this.isSnackbarVisible = true;
        this.snackbarMessage = 'Article correctement supprimé du panier';
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
          this.isSnackbarVisible = true;
          this.snackbarMessage = 'Le contenu du panier a correctement été vidé';
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
      const orderedItemsFromBag: OrderedItems =
        this.bag.items.map(item =>
          ({ itemId: item.bagItem.id, quantity: item.quantity, size: item.size } as OrderedItem));

      this.orderService
        .createOrder(userId)
        .pipe(
          tap(order => this.order = order),
          switchMap(order =>
            this.orderService.addOrderedItems(order.id, { orderedItems: orderedItemsFromBag }))
        ).pipe(
          switchMap(orderedItems => this.bagService.emptyBag(userId))
      ).subscribe(_ => this.router.navigate(['/orders']), err => console.log(err));
    }
  }
}

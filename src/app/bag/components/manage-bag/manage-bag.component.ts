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
  bag: Bag = { totalPrice: 0, items: [] };

  constructor(private bagService: BagServerService, private manageToke: ManageUserTokenService) {}

  ngOnInit(): void {
    const userId = this.manageToke.getUserIdViaToken();
    this.bagService
      .getUserBag(userId)
      .subscribe(bag => this.bag = bag);
  }

  deleteBaggedItem(element: ElementToDelete<BaggedItem>) {
    this.bagService
      .deleteItemFromBag(element.element.id)
      .subscribe(_ => {
        const priceToWithdraw = element.element.quantity * element.element.bagItem.price;
        this.bag.totalPrice -= priceToWithdraw;
        this.bag.items.splice(element.index, 1);
        console.log('Deleted successfully');
      }, err => console.log(err));
  }
}

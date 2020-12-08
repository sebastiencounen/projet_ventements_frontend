import { Component, OnInit } from '@angular/core';
import {Bag} from '../../types/bag';
import {BagServerService} from '../../repositories/bag-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';

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
}

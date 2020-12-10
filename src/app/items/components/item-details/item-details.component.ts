import {Component, OnInit} from '@angular/core';
import {Item} from '../../types/item';
import {ItemsServerService} from '../../repositories/items-server.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {Reviews} from '../../types/review';
import {BaggedItem} from '../../../bag/types/bagged-item';
import {BagServerService} from '../../../bag/repositories/bag-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {isCombinedModifierFlagSet} from 'tslint';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item: Item = {label: ""};
  reviews: Reviews = [];

  baggedItem: BaggedItem = {bagItem: this.item, quantity: 1, size: ''};

  isModalVisible: boolean = false;

  constructor(private itemService: ItemsServerService,
              private bagService: BagServerService,
              private manageToken: ManageUserTokenService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getItemById();
    this.getReviews();
  }

  private getItemById() {
    this.route.paramMap.pipe(
      filter(params => +params.get('id') !== 0),
      map(params => +params.get('id')),
      switchMap(id => this.itemService.getItemById(id))
    ).subscribe(item => {
      this.item = item;
      this.baggedItem.bagItem = this.item;
    });
  }

  private getReviews() {
    this.route.paramMap.pipe(
      filter(params => +params.get('id') !== 0),
      map(params => +params.get('id')),
      switchMap(id => this.itemService.getReviews(id))
    ).subscribe(reviews => this.reviews = reviews);
  }

  addToBag() {
      if (this.baggedItem.quantity < 1 || !this.baggedItem.size) return;
      this.manageToken
        .isAuthenticated()
        .subscribe(response => {
          if (!response) {
            this.router.navigate(['users', 'sign-in']);
            return;
          }

          const userId = this.manageToken.getUserIdViaToken();
          return this.bagService
            .addItemToBag(userId, this.baggedItem)
            .subscribe(
              baggedItem => {
                this.baggedItem = {bagItem: this.item, quantity: 1, size: ''};
                this.isModalVisible = true;
              },
              err => console.log(err)
            );
        });
    }

  closeModal() {
    this.isModalVisible = false;
  }
}

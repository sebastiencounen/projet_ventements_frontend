import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../../types/item';
import {ItemsServerService} from '../../repositories/items-server.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {Review, Reviews} from '../../types/review';
import {BaggedItem} from '../../../bag/types/bagged-item';
import {BagServerService} from '../../../bag/repositories/bag-server.service';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {ReviewsServerService} from '../../repositories/reviews-server.service';
import {Subscription} from 'rxjs';
import {WishlistServerService} from '../../../wishlist/repositories/wishlist-server.service';
import {Wishlist} from '../../../wishlist/types/wishlist';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  isAuthSubscription: Subscription;

  item: Item = {label: ''};
  reviews: Reviews = [];

  stars: number[] = [1, 2, 3, 4, 5];

  baggedItem: BaggedItem = {bagItem: this.item, quantity: 1, size: ''};

  wishlistItem: Wishlist = {itemWishList: this.item};

  isModalVisible: boolean = false;
  isSnackbarVisible: boolean = false;

  snackbarMessage: string;

  constructor(private itemService: ItemsServerService,
              private bagService: BagServerService,
              private reviewService: ReviewsServerService,
              private wishlistService: WishlistServerService,
              private manageToken: ManageUserTokenService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getItemById();
    this.getReviews();
  }

  ngOnDestroy(): void {
    if (this.isAuthSubscription) {
      this.isAuthSubscription.unsubscribe();
    }
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
    if (this.baggedItem.quantity < 1) {
      this.isSnackbarVisible = true;
      this.snackbarMessage = 'Vous devez ajouter une quantité d\'au moins un article !';
      return;
    }

    if (!this.baggedItem.size) {
      this.isSnackbarVisible = true;
      this.snackbarMessage = 'Veuillez préciser une taille !';
      return;
    }

    this.isAuthSubscription = this.manageToken
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
            err => {
              this.isSnackbarVisible = true;
              this.snackbarMessage = err.error.message;
            }
          );
      });
  }

  addReview(review: Review) {
    this.isAuthSubscription = this.manageToken
      .isAuthenticated()
      .subscribe(response => {
        if (!response) {
          this.router.navigate(['users', 'sign-in']);
          return;
        }

        const userId = this.manageToken.getUserIdViaToken();

        return this.reviewService
          .addReview(userId, this.item.id, review)
          .subscribe(
            review => this.reviews.push(review),
            err => console.log(err)
          );
      });
  }

  addToWishlist() {
    this.isAuthSubscription = this.manageToken
      .isAuthenticated()
      .subscribe(response => {
        if (!response) {
          this.router.navigate(['users', 'sign-in']);
          return;
        }

        const userId = this.manageToken.getUserIdViaToken();

        return this.wishlistService
          .addItemToWishlist(userId, this.item.id)
          .subscribe(
            () => {
              this.isSnackbarVisible = true;
              this.snackbarMessage = 'L\'article a bien été ajouté à votre liste de souhaits';
            },
            err => {
              this.isSnackbarVisible = true;
              this.snackbarMessage = err.error.message;
            }
          );
      });
  }

  closeModal() {
    this.isModalVisible = false;
  }
}

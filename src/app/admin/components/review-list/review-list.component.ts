import { Component, OnInit } from '@angular/core';
import {Reviews} from '../../../items/types/review';
import {ReviewsServerService} from '../../../items/repositories/reviews-server.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  reviews: Reviews = [];

  constructor(private reviewService: ReviewsServerService) {}

  ngOnInit(): void {
    this.initReviews();
  }

  private initReviews() {
    this.reviewService
      .query()
      .subscribe(reviews => this.reviews = reviews);
  }

}

import {Injectable} from '@angular/core';
import {ReviewsRepository} from './reviews-repository';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Review} from '../types/review';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsServerService implements ReviewsRepository {

  private static readonly URL: string = environment.serverAddress + '/reviews/';

  constructor(private httpClient: HttpClient) {}

  addReview(userId: number, itemId: number, review: Review): Observable<Review> {
    return this.httpClient.post<Review>(
      ReviewsServerService.URL + userId + '/item/' + itemId, review);
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.httpClient.delete(ReviewsServerService.URL + '/' + reviewId);
  }
}

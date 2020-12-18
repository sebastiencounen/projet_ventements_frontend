import {Injectable} from '@angular/core';
import {ReviewsRepository} from './reviews-repository';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Review, Reviews} from '../types/review';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsServerService implements ReviewsRepository {

  private static readonly URL: string = environment.serverAddress + '/reviews/';

  constructor(private httpClient: HttpClient) {}

  query(): Observable<Reviews> {
    return this.httpClient.get<Reviews>(ReviewsServerService.URL);
  }

  addReview(userId: number, itemId: number, review: Review): Observable<Review> {
    return this.httpClient.post<Review>(
      ReviewsServerService.URL + userId + '/item/' + itemId, review);
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.httpClient.delete(ReviewsServerService.URL + reviewId);
  }
}

import {Review, Reviews} from '../types/review';
import {Observable} from 'rxjs';

export interface ReviewsRepository {
  query(): Observable<Reviews>;

  addReview(userId: number, itemId: number, review: Review): Observable<Review>;

  deleteReview(reviewId: number): Observable<any>
}

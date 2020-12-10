import {Review} from '../types/review';
import {Observable} from 'rxjs';

export interface ReviewsRepository {
  addReview(userId: number, itemId: number, review: Review): Observable<any>;
}

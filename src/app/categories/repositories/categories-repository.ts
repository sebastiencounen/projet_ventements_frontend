import {Observable} from 'rxjs';
import {Categories} from '../types/category';

export interface CategoriesRepository {
  query(): Observable<Categories>;
}

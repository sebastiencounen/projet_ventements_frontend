import {Observable} from 'rxjs';
import {Categories, Category} from '../types/category';

export interface CategoriesRepository {
  query(): Observable<Categories>;

  getCategoryById(id: number): Observable<Category>;

  addCategory(category: Category): Observable<Category>;

  addSubcategory(categoryId: number, subCategory: Category): Observable<Category>;
}

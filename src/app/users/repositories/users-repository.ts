import {Observable} from 'rxjs';
import {User, Users} from '../types/user';

export interface UsersRepository {
  query(): Observable<Users>;

  authenticate(user: User): Observable<User>;

  post(user: User): Observable<User>;
}

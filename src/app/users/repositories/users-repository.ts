import {Observable} from 'rxjs';
import {User, Users} from '../types/user';
import {Address} from '../types/address';

export interface UsersRepository {
  query(): Observable<Users>;

  authenticate(user: User): Observable<User>;

  post(user: User): Observable<User>;

  getById(id: number): Observable<User>;

  registerAddress(userId: number, address: Address): Observable<Address>;

  delete(userId: number): Observable<any>;
}

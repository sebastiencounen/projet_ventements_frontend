import {Injectable} from '@angular/core';
import {UsersRepository} from './users-repository';
import {User, Users} from '../types/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Address} from '../types/address';

@Injectable({
  providedIn: 'root'
})
export class UsersServerService implements UsersRepository {

  private static readonly URL: string = environment.serverAddress + '/users';

  constructor(private httpClient: HttpClient) {
  }

  authenticate(user: User): Observable<User> {
    return this.httpClient.post<User>(UsersServerService.URL + '/authenticate', user)
      .pipe(
        tap(user => localStorage.setItem('token', user.token))
      );
  }

  query(): Observable<Users> {
    return this.httpClient.get<Users>(UsersServerService.URL);
  }

  post(user: User): Observable<User> {
    return this.httpClient.post<User>(UsersServerService.URL, user)
      .pipe(
        tap(user => localStorage.setItem('token', user.token))
      );
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(UsersServerService.URL + '/' + id);
  }

  registerAddress(userId: number, address: Address): Observable<Address> {
    return this.httpClient.post<Address>(UsersServerService.URL + '/' + userId + '/address', address);
  }

  delete(userId: number): Observable<any> {
    return this.httpClient.delete(UsersServerService.URL + '/' + userId);
  }
}

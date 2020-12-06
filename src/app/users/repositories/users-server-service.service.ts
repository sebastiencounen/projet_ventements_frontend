import { Injectable } from '@angular/core';
import {UsersRepository} from './users-repository';
import {User, Users} from '../types/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServerServiceService implements UsersRepository {

  private static readonly URL: string = environment.serverAddress + '/users';

  constructor(private httpClient: HttpClient) {}

  authenticate(user: User): Observable<User> {
    return this.httpClient.post<User>(UsersServerServiceService.URL + 'authenticate', user);
  }

  query(): Observable<Users> {
    return undefined;
  }
}

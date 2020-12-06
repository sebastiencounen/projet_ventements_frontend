import { Injectable } from '@angular/core';
import {UsersRepository} from './users-repository';
import {User, Users} from '../types/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServerServiceService implements UsersRepository {

  private static readonly URL: string = environment.serverAddress + '/users';

  constructor(private httpClient: HttpClient) {}

  authenticate(user: User): Observable<User> {
    return this.httpClient.post<User>(UsersServerServiceService.URL + '/authenticate', user)
      .pipe(
        tap(user => localStorage.setItem('token', user.token))
      );
  }

  query(): Observable<Users> {
    return this.httpClient.get<Users>(UsersServerServiceService.URL);
  }

  post(user: User): Observable<User> {
    return this.httpClient.post<User>(UsersServerServiceService.URL, user)
      .pipe(
        tap(user => localStorage.setItem('token', user.token))
      );
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(UsersServerServiceService.URL + '/' + id);
  }

  getUserIdViaToken(): number {
    const token = localStorage.getItem('token');

    const jwtPayload = token.split('.')[1];
    const decodedJwtPayload = JSON.parse(window.atob(jwtPayload));

    return decodedJwtPayload.id;
  }
}

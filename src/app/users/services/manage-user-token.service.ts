import {Injectable} from '@angular/core';
import {UsersServerService} from '../repositories/users-server.service';
import {ManageUserToken} from './manage-user-token';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManageUserTokenService implements ManageUserToken {

  constructor(private usersService: UsersServerService) {}

  getUserIdViaToken(): number {
    let token;
    if (localStorage.getItem('token')) {
      token = localStorage.getItem('token');
    } else {
      return null;
    }

    const jwtPayload = token.split('.')[1];
    const decodedJwtPayload = JSON.parse(window.atob(jwtPayload));

    return decodedJwtPayload.id;
  }

  isAuthenticated(): Observable<boolean> {
    const userId = this.getUserIdViaToken();

    if (!userId) return of(false);

    return this.usersService.getById(userId)
      .pipe(
        switchMap(user => user ? of(true) : of(false))
      );
  }

  logOut(): void {
    localStorage.removeItem('token');
  }
}

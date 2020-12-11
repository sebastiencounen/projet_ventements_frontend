import {Observable} from 'rxjs';
import {Roles} from '../types/roles.enum';

export interface ManageUserToken {
  getUserIdViaToken(): number;

  getUserRoleViaToken(): Roles;

  isAuthenticated(): Observable<boolean>;

  isAdmin(): Observable<boolean>;

  logOut(): void
}

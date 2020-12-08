import {Observable} from 'rxjs';

export interface ManageUserToken {
  getUserIdViaToken(): number;

  isAuthenticated(): Observable<boolean>;

  logOut(): void
}

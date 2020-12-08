import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ManageUserTokenService} from '../services/manage-user-token.service';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private manageTokenService: ManageUserTokenService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.manageTokenService
      .isAuthenticated()
      .pipe(
        switchMap((response: boolean) => {
          if (!response) {
            this.router.navigate(['/users', 'sign-in']);
            localStorage.removeItem('token');
          }

          return of(response)
        })
      );
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ManageUserTokenService} from '../services/manage-user-token.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private manageTokenService: ManageUserTokenService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.manageTokenService
      .isAdmin()
      .pipe(
        switchMap((response: boolean) => {
          if (!response) {
            this.router.navigate(['/users', 'sign-in']);
          }

          return of(response);
        })
      );
  }
}

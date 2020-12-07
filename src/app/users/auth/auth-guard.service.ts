import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersServerServiceService} from '../repositories/users-server-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private usersService: UsersServerServiceService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userId = this.usersService.getUserIdViaToken();
    if (!userId) return false;

    this.usersService.getById(userId)
      .subscribe(
        user => {
            if (user) {
              return true;
            } else {
              localStorage.removeItem('token');
              this.router.navigate(['/users', 'sign-in']);
              return false;
            }
        },
        err => {
          localStorage.removeItem('token');
          this.router.navigate(['/users', 'sign-in']);
          return false;
        }
      );

    return undefined;
  }
}

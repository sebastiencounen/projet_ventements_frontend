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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.usersService.isAuthenticated()
        .then(result => {
          if (!result) {
            this.router.navigate(['/users', 'sign-in']);
            localStorage.removeItem('token');
          }
          resolve(result);
        })
        .catch(err => resolve(false));
    });
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventBusService} from '../../event-bus/event-bus.service';
import {Events} from '../../event-bus/events.enum';
import {Router} from '@angular/router';
import {ManageUserTokenService} from '../../../users/services/manage-user-token.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  isAuthSubscription: Subscription;

  constructor(private manageTokenService: ManageUserTokenService, private eventBus: EventBusService,
              private router: Router) {}

  ngOnDestroy(): void {
    this.isAuthSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isAuthSubscription = this.manageTokenService
      .isAuthenticated()
      .subscribe(
        (response: boolean) => this.isAuth = response,
        err => this.isAuth = false
      );

    //
    this.eventBus.listen(Events.USER_CONNECTED, user => {
      if (user) { this.isAuth = true; }
    });
  }

  logOut() {
    this.manageTokenService.logOut();
    this.isAuth = false;
    this.router.navigate(["/"]);
  }
}

import {Component, OnInit} from '@angular/core';
import {UsersServerService} from '../../../users/repositories/users-server.service';
import {EventBusService} from '../../event-bus/event-bus.service';
import {Events} from '../../event-bus/events.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;

  constructor(private usersService: UsersServerService, private eventBus: EventBusService,
              private router: Router) {}

  ngOnInit(): void {
    this.usersService.isAuthenticated()
      .then(result => this.isAuth = result)
      .catch(_ => this.isAuth = false);

    //
    this.eventBus.listen(Events.USER_CONNECTED, user => {
      if (user) { this.isAuth = true; }
    })
  }

  logOut() {
    this.usersService.logOut();
    this.isAuth = false;
    this.router.navigate(["/"]);
  }
}

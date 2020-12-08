import {Component, OnInit} from '@angular/core';
import {UsersServerServiceService} from '../../../users/repositories/users-server-service.service';
import {EventBusService} from '../../event-bus/event-bus.service';
import {Events} from '../../event-bus/events.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;

  constructor(private usersService: UsersServerServiceService, private eventBus: EventBusService) {}

  ngOnInit(): void {
    this.usersService.isAuthenticated()
      .then(result => this.isAuth = result)
      .catch(_ => this.isAuth = false);

    //
    this.eventBus.listen(Events.USER_CONNECTED, user => {
      if (user) { this.isAuth = true; }
    })
  }

}

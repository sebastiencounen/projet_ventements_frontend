import { Component, OnInit } from '@angular/core';
import {UsersServerServiceService} from '../../../users/repositories/users-server-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;

  constructor(private usersService: UsersServerServiceService) {}

  ngOnInit(): void {
    this.usersService.isAuthenticated()
      .then(result => this.isAuth = result)
      .catch(_ => this.isAuth = false);
  }

}

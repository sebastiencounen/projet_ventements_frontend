import { Component, OnInit } from '@angular/core';
import {User} from '../../types/user';
import {UsersServerServiceService} from '../../repositories/users-server-service.service';
import {Address} from '../../types/address';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersServerServiceService) {}

  ngOnInit(): void {
    const userId: number = this.usersService.getUserIdViaToken();

    if (userId) {
      this.usersService.getById(userId)
        .subscribe(
          user => this.user = user,
          err => console.log(err.error.message)
        );
    }
  }

  postAddress(address: Address): void {
    this.usersService.registerAddress(this.user.id, address)
      .subscribe(
        address => this.user.userAddress = address,
        err => console.log(err.error.message)
      );
  }
}

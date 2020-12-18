import { Component, OnInit } from '@angular/core';
import {User} from '../../types/user';
import {UsersServerService} from '../../repositories/users-server.service';
import {Address} from '../../types/address';
import {ManageUserTokenService} from '../../services/manage-user-token.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  user: User = { email: '', userAddress: null };

  constructor(private usersService: UsersServerService, private manageTokenService: ManageUserTokenService) {}

  ngOnInit(): void {
    const userId: number = this.manageTokenService.getUserIdViaToken();

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

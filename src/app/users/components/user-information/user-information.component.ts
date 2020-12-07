import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../types/user';
import {UsersServerServiceService} from '../../repositories/users-server-service.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  @Input()
  user: User;

  constructor() {}

  ngOnInit(): void {
  }

}

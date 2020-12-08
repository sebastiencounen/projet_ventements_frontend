import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {User} from '../../types/user';
import {UsersServerService} from '../../repositories/users-server.service';
import {Address} from '../../types/address';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit, OnChanges {

  @Output()
  addressChange: EventEmitter<Address> = new EventEmitter<Address>();

  @Input()
  user: User;

  updateAddress: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'].currentValue) {
      this.user = changes['user'].currentValue;
    }
  }

  submitUpdatedAddress(address: Address) {
    this.addressChange.emit(address);
    this.updateAddress = false;
  }

  modifyAddress() {
    this.updateAddress = !this.updateAddress;
  }
}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../types/address';

@Component({
  selector: 'app-register-address-form',
  templateUrl: './register-address-form.component.html',
  styleUrls: ['./register-address-form.component.scss']
})
export class RegisterAddressFormComponent implements OnInit, OnChanges {

  @Output()
  addressSubmit: EventEmitter<Address> = new EventEmitter<Address>();

  @Input()
  addressToUpdate: Address = null;

  formAddress: FormGroup = this.fb.group({
    street: ['', Validators.required],
    homeNumber: ['', [Validators.required, Validators.min(0)]],
    zip: ['', Validators.required],
    city: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  submit(): void {
    this.addressSubmit.emit(this.formAddress.value);
    this.formAddress.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['addressToUpdate'].currentValue) {
      const currentUserAddress = changes['addressToUpdate'].currentValue;
      this.formAddress.setValue({
        street: currentUserAddress.street,
        homeNumber: currentUserAddress.homeNumber,
        zip: currentUserAddress.zip,
        city: currentUserAddress.city
      });
    }
  }
}

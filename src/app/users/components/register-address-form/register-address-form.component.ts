import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../types/address';

@Component({
  selector: 'app-register-address-form',
  templateUrl: './register-address-form.component.html',
  styleUrls: ['./register-address-form.component.scss']
})
export class RegisterAddressFormComponent implements OnInit {

  @Output()
  addressSubmit: EventEmitter<Address> = new EventEmitter<Address>();

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
}

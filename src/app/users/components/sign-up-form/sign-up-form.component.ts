import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersServerServiceService} from '../../repositories/users-server-service.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  signUpForm: FormGroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    birthdate: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    userPassword: ['', [Validators.minLength(6), Validators.required]],
    gender: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private usersService: UsersServerServiceService) {}

  ngOnInit(): void {
  }

  submit(): void {
    this.usersService.post(this.signUpForm.value)
      .subscribe(
        user => console.log(user),
        err => console.log(err.error.message)
      );
  }
}

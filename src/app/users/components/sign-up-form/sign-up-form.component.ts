import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersServerServiceService} from '../../repositories/users-server-service.service';
import {Router} from '@angular/router';

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
    gender: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private usersService: UsersServerServiceService, private router: Router) {}

  ngOnInit(): void {
  }

  submit(): void {
    this.usersService.post(this.signUpForm.value)
      .subscribe(
        user => this.router.navigate(['/users']),
        err => console.log(err.error.message)
      );
  }
}

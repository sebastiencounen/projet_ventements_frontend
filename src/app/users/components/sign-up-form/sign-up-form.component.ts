import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersServerService} from '../../repositories/users-server.service';
import {Router} from '@angular/router';
import {EventBusService} from '../../../common/event-bus/event-bus.service';
import {EventData} from '../../../common/event-bus/event-data';
import {Events} from '../../../common/event-bus/events.enum';

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

  constructor(private fb: FormBuilder, private usersService: UsersServerService,
              private router: Router, private eventBus: EventBusService) {}

  ngOnInit(): void {
  }

  submit(): void {
    this.usersService.post(this.signUpForm.value)
      .subscribe(
        user => {
          this.router.navigate(['/'])
          this.eventBus.next(new EventData(Events.USER_CONNECTED, user));
        },
        err => console.log(err.error.message)
      );
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersServerServiceService} from '../../repositories/users-server-service.service';
import {Router} from '@angular/router';
import {EventBusService} from '../../../common/event-bus/event-bus.service';
import {EventData} from '../../../common/event-bus/event-data';
import {Events} from '../../../common/event-bus/events.enum';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  signInFrom: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwordUser: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private usersService: UsersServerServiceService,
              private router: Router, private eventBus: EventBusService) {}

  ngOnInit(): void {
  }

  submit(): void {
    this.usersService.authenticate(this.signInFrom.value)
      .subscribe(user => {
        this.router.navigate(['/users']);
        this.eventBus.next(new EventData(Events.USER_CONNECTED, user));
      });
  }
}

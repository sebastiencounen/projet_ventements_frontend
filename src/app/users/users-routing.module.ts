import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from './components/sign-up-form/sign-up-form.component';

const routes: Routes = [
  { path: 'users/sign-in', component: SignInFormComponent },
  { path: 'users/sign-up', component: SignUpFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
  static components = [
    SignInFormComponent,
    SignUpFormComponent
  ];
}

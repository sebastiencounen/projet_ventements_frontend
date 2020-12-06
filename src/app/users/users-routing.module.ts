import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from './components/sign-up-form/sign-up-form.component';
import {ManageUserComponent} from './components/manage-user/manage-user.component';

const routes: Routes = [
  { path: 'users', component: ManageUserComponent },
  { path: 'users/sign-in', component: SignInFormComponent },
  { path: 'users/sign-up', component: SignUpFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
  static components = [
    ManageUserComponent,
    SignInFormComponent,
    SignUpFormComponent
  ];
}

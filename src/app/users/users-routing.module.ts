import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from './components/sign-up-form/sign-up-form.component';
import {ManageUserComponent} from './components/manage-user/manage-user.component';
import {UserInformationComponent} from './components/user-information/user-information.component';
import {RegisterAddressFormComponent} from './components/register-address-form/register-address-form.component';

const routes: Routes = [
  { path: 'users', component: ManageUserComponent,
    children: [
      { path: '', redirectTo: 'user-information', pathMatch: 'full' },
      { path: 'user-information', component: UserInformationComponent }
    ]
  },
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
    SignUpFormComponent,
    UserInformationComponent,
    RegisterAddressFormComponent
  ];
}

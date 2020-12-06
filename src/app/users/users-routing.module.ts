import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';

const routes: Routes = [
  { path: 'users/sign-in', component: SignInFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
  static components = [
    SignInFormComponent
  ];
}

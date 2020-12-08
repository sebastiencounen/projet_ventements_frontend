import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageBagComponent} from './components/manage-bag/manage-bag.component';
import {ListBaggedItemsComponent} from './components/list-bagged-items/list-bagged-items.component';
import {AuthGuardService} from '../users/auth/auth-guard.service';

const routes: Routes = [
  { path: 'bag', canActivate: [AuthGuardService], component: ManageBagComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BagRoutingModule {
  static components = [
    ManageBagComponent,
    ListBaggedItemsComponent
  ];
}

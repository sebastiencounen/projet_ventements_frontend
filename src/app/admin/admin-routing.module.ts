import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuardService} from './auth/admin-guard.service';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'admin/dashboard', canActivate: [AdminGuardService], component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminDashboardComponent,
  ];
}

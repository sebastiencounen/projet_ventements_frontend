import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuardService} from './auth/admin-guard.service';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {ItemFormComponent} from './components/item-form/item-form.component';
import {FileUploaderComponent} from '../common/components/file-uploader/file-uploader.component';

const routes: Routes = [
  { path: 'admin/dashboard', canActivate: [AdminGuardService], component: AdminDashboardComponent,
    children: [
      { path: 'items/add', component: ItemFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminDashboardComponent,
    ItemFormComponent,
    FileUploaderComponent
  ];
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuardService} from './auth/admin-guard.service';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {ItemFormComponent} from './components/item-form/item-form.component';
import {FileUploaderComponent} from '../common/components/file-uploader/file-uploader.component';
import {CategoryFormComponent} from './components/category-form/category-form.component';
import {SubCategoryFormComponent} from './components/sub-category-form/sub-category-form.component';

const routes: Routes = [
  { path: 'admin/dashboard', canActivate: [AdminGuardService], component: AdminDashboardComponent,
    children: [
      { path: 'items/add', component: ItemFormComponent },
      { path: 'categories/add', component: CategoryFormComponent },
      { path: 'subcategories/add', component: SubCategoryFormComponent }
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
    FileUploaderComponent,
    CategoryFormComponent,
    SubCategoryFormComponent
  ];
}

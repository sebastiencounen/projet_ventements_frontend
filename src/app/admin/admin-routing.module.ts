import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuardService} from './auth/admin-guard.service';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {ItemFormComponent} from './components/item-form/item-form.component';
import {CategoryFormComponent} from './components/category-form/category-form.component';
import {SubCategoryFormComponent} from './components/sub-category-form/sub-category-form.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {DeleteItemComponent} from './components/delete-item/delete-item.component';
import {ReviewListComponent} from './components/review-list/review-list.component';

const routes: Routes = [
  { path: 'admin/dashboard', canActivate: [AdminGuardService], component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'items/add', component: ItemFormComponent },
      { path: 'items/delete', component: DeleteItemComponent },
      { path: 'categories/add', component: CategoryFormComponent },
      { path: 'subcategories/add', component: SubCategoryFormComponent },
      { path: 'users', component: UsersListComponent },
      { path: 'reviews', component: ReviewListComponent }
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
    CategoryFormComponent,
    SubCategoryFormComponent,
    UsersListComponent,
    DeleteItemComponent,
    ReviewListComponent
  ];
}

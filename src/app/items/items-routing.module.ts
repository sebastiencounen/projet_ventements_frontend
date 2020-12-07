import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageItemsComponent} from './components/manage-items/manage-items.component';
import {ListItemsComponent} from './components/list-items/list-items.component';
import {ManageCategoriesComponent} from '../categories/components/manage-categories/manage-categories.component';
import {ManageSubcategoriesComponent} from '../categories/components/manage-subcategories/manage-subcategories.component';

const routes: Routes = [
  { path: 'categories/:idCategory/subcategories/:idSubcategory/items', component: ManageSubcategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
  static components = [
    ManageItemsComponent,
    ListItemsComponent
  ]
}

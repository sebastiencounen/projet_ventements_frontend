import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageCategoriesComponent} from './components/manage-categories/manage-categories.component';
import {ListCategoriesComponent} from './components/list-categories/list-categories.component';
import {ManageSubcategoriesComponent} from './components/manage-subcategories/manage-subcategories.component';
import {ListSubcategoriesComponent} from './components/list-subcategories/list-subcategories.component';
import {ManageItemsComponent} from '../items/components/manage-items/manage-items.component';

const routes: Routes = [
  {
    path: 'categories', component: ManageCategoriesComponent,
  },
  {
    path: 'categories/:idCategory/subcategories/:idSubcategory/items', component: ManageItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
  static components = [
    ManageCategoriesComponent,
    ListCategoriesComponent,
    ListSubcategoriesComponent,
    ManageSubcategoriesComponent
  ];
}

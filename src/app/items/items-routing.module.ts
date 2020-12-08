import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageItemsComponent} from './components/manage-items/manage-items.component';
import {ListItemsComponent} from './components/list-items/list-items.component';

const routes: Routes = [
  { path: 'category/:idSubcategory/items', component: ManageItemsComponent }
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

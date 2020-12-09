import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageItemsComponent} from './components/manage-items/manage-items.component';
import {ListItemsComponent} from './components/list-items/list-items.component';
import {ItemDetailsComponent} from './components/item-details/item-details.component';

const routes: Routes = [
  { path: 'category/:id/items', component: ManageItemsComponent },
  { path: 'item/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
  static components = [
    ManageItemsComponent,
    ListItemsComponent,
    ItemDetailsComponent
  ]
}

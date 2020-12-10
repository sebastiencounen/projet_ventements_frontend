import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageWishlistComponent} from './components/manage-wishlist/manage-wishlist.component';
import {ListWishlistComponent} from './components/list-wishlist/list-wishlist.component';

const routes: Routes = [
  { path: 'wishlist', component: ManageWishlistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule {
  static components = [
    ManageWishlistComponent,
    ListWishlistComponent
  ];
}

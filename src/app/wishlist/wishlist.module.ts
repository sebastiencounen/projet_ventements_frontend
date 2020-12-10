import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import {ItemsModule} from '../items/items.module';


@NgModule({
  declarations: [WishlistRoutingModule.components],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    ItemsModule
  ]
})
export class WishlistModule { }

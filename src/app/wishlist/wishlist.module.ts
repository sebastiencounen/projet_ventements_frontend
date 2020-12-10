import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';


@NgModule({
  declarations: [WishlistRoutingModule.components],
  imports: [
    CommonModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }

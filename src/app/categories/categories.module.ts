import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {ItemsModule} from '../items/items.module';


@NgModule({
  declarations: [CategoriesRoutingModule.components],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ItemsModule
  ]
})
export class CategoriesModule { }

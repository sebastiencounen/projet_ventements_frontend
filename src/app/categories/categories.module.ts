import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListSubcategoriesComponent } from './components/list-subcategories/list-subcategories.component';
import { ManageSubcategoriesComponent } from './components/manage-subcategories/manage-subcategories.component';
import {FormsModule} from '@angular/forms';
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

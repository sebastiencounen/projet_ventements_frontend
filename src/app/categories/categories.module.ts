import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListSubcategoriesComponent } from './components/list-subcategories/list-subcategories.component';
import { ManageSubcategoriesComponent } from './components/manage-subcategories/manage-subcategories.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CategoriesRoutingModule.components],
  imports: [
    CommonModule,
    HttpClientModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }

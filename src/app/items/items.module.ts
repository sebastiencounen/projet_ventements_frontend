import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsRoutingModule} from './items-routing.module';
import {ManageItemsComponent} from './components/manage-items/manage-items.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListItemsComponent} from './components/list-items/list-items.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [ItemsRoutingModule.components],
  exports: [
    ManageItemsComponent,
    ListItemsComponent
  ],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ItemsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [ItemsRoutingModule.components],
    exports: [
        ManageItemsComponent
    ],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        FormsModule
    ]
})
export class ItemsModule { }

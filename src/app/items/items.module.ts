import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';


@NgModule({
    declarations: [ItemsRoutingModule.components, ItemDetailsComponent],
    exports: [
        ManageItemsComponent
    ],
    imports: [
        CommonModule,
        ItemsRoutingModule
    ]
})
export class ItemsModule { }

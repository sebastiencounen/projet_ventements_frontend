import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsRoutingModule} from './items-routing.module';
import {ManageItemsComponent} from './components/manage-items/manage-items.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [ItemsRoutingModule.components],
    exports: [
        ManageItemsComponent
    ],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ItemsModule { }

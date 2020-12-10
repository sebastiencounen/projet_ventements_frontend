import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReviewFormComponent } from './components/review-form/review-form.component';


@NgModule({
    declarations: [ItemsRoutingModule.components, ReviewFormComponent],
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

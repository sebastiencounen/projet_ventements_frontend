import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [BagRoutingModule.components],
    imports: [
        CommonModule,
        BagRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class BagModule { }

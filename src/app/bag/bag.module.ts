import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [BagRoutingModule.components],
    imports: [
        CommonModule,
        BagRoutingModule,
        FormsModule
    ]
})
export class BagModule { }

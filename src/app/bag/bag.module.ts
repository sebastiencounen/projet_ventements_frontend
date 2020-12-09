import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';


@NgModule({
  declarations: [BagRoutingModule.components],
  imports: [
    CommonModule,
    BagRoutingModule
  ]
})
export class BagModule { }

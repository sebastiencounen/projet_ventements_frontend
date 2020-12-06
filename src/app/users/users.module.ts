import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [UsersRoutingModule.components],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

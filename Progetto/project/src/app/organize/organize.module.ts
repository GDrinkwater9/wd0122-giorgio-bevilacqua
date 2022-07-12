import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizeRoutingModule } from './organize-routing.module';
import { OrganizeComponent } from './organize.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrganizeComponent
  ],
  imports: [
    CommonModule,
    OrganizeRoutingModule,
    FormsModule
  ]
})
export class OrganizeModule { }

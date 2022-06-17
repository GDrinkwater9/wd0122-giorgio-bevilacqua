import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    NgbModule,
    FormsModule

  ]
})
export class CrudModule { }

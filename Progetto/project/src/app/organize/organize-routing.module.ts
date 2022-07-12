import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizeComponent } from './organize.component';

const routes: Routes = [{ path: '', component: OrganizeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizeRoutingModule { }

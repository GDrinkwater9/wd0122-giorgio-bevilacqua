import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenFormsComponent } from './driven-forms/driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path:'driven',
    component:DrivenFormsComponent
  },
  {
    path:'reactive',
    component:ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

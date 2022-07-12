import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 

{ path: '', pathMatch:'full', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 

{ path: 'profilo', canActivate:[AuthGuard], loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule) }, 

{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
{ path: 'organize', loadChildren: () => import('./organize/organize.module').then(m => m.OrganizeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

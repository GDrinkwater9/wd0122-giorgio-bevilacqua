import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudGuard } from './crud.guard';

const routes: Routes = [
  { 
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'registrazione', loadChildren: () => import('./registrazione/registrazione.module').then(m => m.RegistrazioneModule) 
  }, 
  { 
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'crud',
    canActivate: [CrudGuard],
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

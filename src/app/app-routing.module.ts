import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/account/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: 'app/account/account.module#AccountModule'
  },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule'
  },
  {
    path: '**',
    loadChildren: 'app/page-not-found/page-not-found.module#PageNotFoundModule'
  }
]
@NgModule( {
  imports: [
    RouterModule.forRoot( routes, { preloadingStrategy: PreloadAllModules } )
  ],
  exports: [ RouterModule ],
  declarations: []
} )
export class AppRoutingModule { }

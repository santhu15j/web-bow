import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { IsAuthorizedGuard } from '../shared/guards';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [ IsAuthorizedGuard ],
    children: [
      {
        path: '',
        redirectTo: '/user/social-media',
        pathMatch: 'full'
      },
      {
        path: 'social-media',
        loadChildren: 'app/user/social-media/social-media.module#SocialMediaModule'
      },
      {
        path: 'order-history',
        loadChildren: 'app/user/order-history/order-history.module#OrderHistoryModule'
      }
    ]
  }
]
@NgModule( {
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ],
  declarations: []
} )
export class UserRoutingModule { }

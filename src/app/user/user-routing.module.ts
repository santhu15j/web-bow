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
        redirectTo: '/user/social-media'
      },
      {
        path: 'social-media',
        loadChildren: 'app/user/social-media/social-media.module#SocialMediaModule'
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialMediaComponent } from './social-media.component';
import { IsAuthorizedGuard } from '../../shared/guards';

export const routes: Routes = [
  {
    path: '',
    component: SocialMediaComponent,
    canActivate: [ IsAuthorizedGuard ]
  }
]
@NgModule( {
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ],
  declarations: []
} )
export class SocialMediaRoutingModule { }

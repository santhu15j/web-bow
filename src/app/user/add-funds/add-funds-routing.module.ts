import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthorizedGuard } from '../../shared/guards';
import { AddFundsComponent } from './add-funds.component';

export const routes: Routes = [
  {
    path: '',
    component: AddFundsComponent,
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
export class AddFundsRoutingModule { }

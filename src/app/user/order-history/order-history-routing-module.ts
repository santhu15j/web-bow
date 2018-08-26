import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthorizedGuard } from '../../shared/guards';
import { OrderHistoryComponent } from './order-history.component';

export const routes: Routes = [
  {
    path: '',
    component: OrderHistoryComponent,
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
export class OrderHistoryRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthorizedGuard } from '../../shared/guards';
import { FundHistoryComponent } from './fund-history.component';

export const routes: Routes = [
    {
        path: '',
        component: FundHistoryComponent,
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
export class FundHistoryRoutingModule { }

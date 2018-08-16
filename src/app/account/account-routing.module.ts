import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AlreadyLoggedInGuard } from '../shared/guards';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [ AlreadyLoggedInGuard ],
    children: [
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
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
export class AccountRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UICarouselModule } from 'ng-carousel-iuno';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule( {
  imports: [
    CommonModule,
    AccountRoutingModule,
    UICarouselModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  declarations: [ AccountComponent, SignupComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent ]
} )
export class AccountModule { }

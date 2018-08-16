import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatChipsModule,
  MatMenuModule,
  MatDividerModule
} from '@angular/material';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule( {
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatMenuModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  declarations: [ UserComponent ]
} )
export class UserModule { }

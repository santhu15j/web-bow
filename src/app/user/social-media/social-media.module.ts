import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaComponent } from './social-media.component';
import { SocialMediaRoutingModule } from './social-media-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule( {
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  declarations: [ SocialMediaComponent, AddOrderComponent ]
} )
export class SocialMediaModule { }

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
  MatSnackBarModule,
  MatDialogModule,
  MatChipsModule
} from '@angular/material';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

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
    MatDialogModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  declarations: [ SocialMediaComponent, AddOrderComponent, OrderDetailsComponent ],
  entryComponents: [ OrderDetailsComponent ]
} )
export class SocialMediaModule { }

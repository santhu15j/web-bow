import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFundsComponent } from './add-funds.component';
import { AddFundsRoutingModule } from './add-funds-routing.module';
import { MatTabsModule, MatStepperModule, MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule( {
  imports: [
    CommonModule,
    AddFundsRoutingModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [ AddFundsComponent ]
} )
export class AddFundsModule { }

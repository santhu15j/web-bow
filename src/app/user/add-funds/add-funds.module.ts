import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFundsComponent } from './add-funds.component';
import { AddFundsRoutingModule } from './add-funds-routing.module';
import { MatTabsModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaytmComponent } from './components/paytm/paytm.component';
import { TezComponent } from './components/tez/tez.component';
import { BankComponent } from './components/bank/bank.component';

@NgModule( {
  imports: [
    CommonModule,
    AddFundsRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [ AddFundsComponent, PaytmComponent, TezComponent, BankComponent ]
} )
export class AddFundsModule { }

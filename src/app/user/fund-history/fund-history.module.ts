import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundHistoryComponent } from './fund-history.component';
import { FundHistoryRoutingModule } from './fund-history-routing.module';
import { MatTableModule, MatProgressSpinnerModule, MatPaginatorModule, MatChipsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule( {
  imports: [
    CommonModule,
    FundHistoryRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  declarations: [ FundHistoryComponent ]
} )
export class FundHistoryModule { }

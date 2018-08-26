import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './order-history.component';
import { OrderHistoryRoutingModule } from './order-history-routing-module';
import { MatTableModule, MatProgressSpinnerModule, MatPaginatorModule, MatChipsModule } from '@angular/material';

@NgModule( {
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  declarations: [ OrderHistoryComponent ]
} )
export class OrderHistoryModule { }

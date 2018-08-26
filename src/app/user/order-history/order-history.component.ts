import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../shared/types';
import { ApiHelperService, CoreHelperService } from '../../shared/services';

@Component( {
  selector: 'lw-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: [ './order-history.component.scss' ]
} )
export class OrderHistoryComponent implements OnInit {
  orders: any = null;
  currentPage: number = 1;
  isLoadingResults: boolean = false;
  orderColumns: string[] = [ 'Order ID', 'Service', 'Status', 'Quantity', 'Amount', 'Order Time', 'Link' ];
  orderColumnsInMobile: string[] = [ 'Order ID', 'Service', 'Status' ];

  constructor(
    private _apiHelper: ApiHelperService,
    public _coreHelper: CoreHelperService
  ) {

  }

  getOrderHistory( page ) {
    this.isLoadingResults = true;
    this._apiHelper.getOrderHistory( page )
      .subscribe( ( response: ApiResponse ) => {
        console.log( response );
        this.isLoadingResults = false;
        if ( response.status ) {
          this.orders = response.response;
          if ( this.orders && this.orders.length > 0 ) {
            this.orders = this.orders.sort( ( a, b ) => parseInt( b.orderId, 10 ) - parseInt( a.orderId, 10 ) );
          }
        } else {
          // Error handling
          this.orders = null;
        }
      } );
  }

  ngOnInit() {
    this.getOrderHistory( this.currentPage );
  }

}

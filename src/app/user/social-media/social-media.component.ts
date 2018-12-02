import { Component, OnInit } from '@angular/core';
import { ApiHelperService } from '../../shared/services';
import { ServiceCategory, ApiResponse, OrderStatus } from '../../shared/types';
import { MatDialog } from '@angular/material';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@Component( {
  selector: 'lw-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: [ './social-media.component.scss' ]
} )
export class SocialMediaComponent implements OnInit {
  public serviceCategories: ServiceCategory[] = [];
  public orderStatus: OrderStatus = null;

  constructor(
    private _apiHelper: ApiHelperService,
    private _dialog: MatDialog
  ) {

  }

  getServiceCategories() {
    this._apiHelper.getServiceCategories()
      .subscribe( ( response: ApiResponse ) => {
        console.log( response );
        if ( response.status ) {
          this.serviceCategories = response.response;
        } else {
          // Error handling
        }
      } );
  }

  showOrderDetail( order ) {
    let ref = this._dialog.open( OrderDetailsComponent, {
      width: '450px'
    } );
    ref.componentInstance.order = order;
    ref.afterClosed().subscribe( () => ref = null );
  }

  getOrderStatusBar() {
    this._apiHelper.getOrderStatusBar()
      .subscribe( ( response: ApiResponse ) => {
        if ( response.status && response.response ) {
          this.orderStatus = response.response;
        } else {
          // Error handling
        }
      } );
  }

  ngOnInit() {
    this.getServiceCategories();
    this.getOrderStatusBar();
  }

}

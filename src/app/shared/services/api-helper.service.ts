import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AddOrder } from '../types';

@Injectable()
export class ApiHelperService {
  public _apiURL = 'https://www.likes.world/';
  public storageType = localStorage;
  public userModel = this.getCache( 'usermodel' );

  constructor(
    public http: HttpClient,
    public _router: Router
  ) { }

  getRequest( url ) {
    let headers = new HttpHeaders( {
      'Content-Type': 'application/x-www-form-urlencoded'
    } );
    return this.http
      .get( this._apiURL + url, { headers } );
  }

  postRequest( url, body ) {
    let headers = new HttpHeaders( {
      'Content-Type': 'application/x-www-form-urlencoded'
    } );
    return this.http
      .post( this._apiURL + url, JSON.stringify( body ), { headers } );
  }

  getCache( key ) {
    return JSON.parse( this.storageType.getItem( key ) );
  }

  setCache( key, value ) {
    this.storageType.setItem( key, JSON.stringify( value ) );
  }

  removeAllCache() {
    let i = this.storageType.length;
    while ( i-- ) {
      let key = this.storageType.key( i );
      this.storageType.removeItem( key );
    }
  }

  removeCache( key ) {
    this.storageType.removeItem( key );
  }

  register( signupDetails ) {
    const url = 'mediaPromotion/user/register';
    return this.postRequest( url, signupDetails );
  }

  login( loginDetails ) {
    const url = 'mediaPromotion/user/login';
    return this.postRequest( url, loginDetails ).do( ( response: any ) => {
      if ( response.status ) {
        this.userModel = response.response;
        this.setCache( 'usermodel', response.response );
        this._router.navigate( [ 'user' ] );
      }
    } );
  }

  forgotPassword( forgotPasswordDetails ) {
    const url = 'mediaPromotion/user/forgotPassword';
    return this.postRequest( url, forgotPasswordDetails );
  }

  logout() {
    const url = 'mediaPromotion/user/logout';
    return this.postRequest( url, { userId: this.userModel.id } ).do( ( response: any ) => {
      if ( response.status ) {
        this.removeAllCache();
        this._router.navigate( [ 'account', 'login' ] );
      }
    } );
  }

  getNews() {
    const url = 'mediaPromotion/service/getNews';
    return this.postRequest( url, { session: this.userModel.session } );
  }

  getServiceCategories() {
    const url = 'mediaPromotion/service/getCategory';
    return this.postRequest( url, { session: this.userModel.session } );
  }

  getSubCategories( id ) {
    const url = 'mediaPromotion/service/getSubCategory';
    return this.postRequest( url, { session: this.userModel.session, parentId: id } );
  }

  getServiceDetails( serviceCategoryId: string, subCategoryId: string ): Observable<any> {
    const url = 'mediaPromotion/service/serviceDetail';
    return this.postRequest( url, { session: this.userModel.session, catId: serviceCategoryId, subCatId: subCategoryId } );
  }

  addOrder( order: AddOrder ) {
    const url = 'mediaPromotion/order/placeOrder';
    return this.postRequest( url, { ...order, session: this.userModel.session } );
  }

  getOrderHistory( page: number = 1 ) {
    const url = 'mediaPromotion/order/orderHistory';
    return this.postRequest( url, { page: page, session: this.userModel.session } );
  }

  addFunds( id, amount ) {
    const url = 'mediaPromotion/user/userAddMoney';
    return this.postRequest( url, { txnId: id, amount: amount, session: this.userModel.session } );
  }
}

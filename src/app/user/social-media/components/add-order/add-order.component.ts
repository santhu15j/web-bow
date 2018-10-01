import { Component, OnInit, Input } from '@angular/core';
import { ServiceCategory, ApiResponse, SubCategory, ServiceDetail } from '../../../../shared/types';
import { ApiHelperService } from '../../../../shared/services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component( {
  selector: 'lw-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: [ './add-order.component.scss' ]
} )
export class AddOrderComponent implements OnInit {
  @Input() serviceCategory: ServiceCategory = null;
  public subCategories: SubCategory[] = [];
  public serviceDetails: ServiceDetail[] = [];
  public selectedSubCategory: SubCategory = null;
  public selectedServiceDetail: ServiceDetail = null;
  public addOrderForm: FormGroup;
  public apiProgress: boolean = false;

  get subCategoryId() { return this.addOrderForm.get( 'subCategoryId' ); }

  get serviceId() { return this.addOrderForm.get( 'serviceId' ); }

  get link() { return this.addOrderForm.get( 'link' ); }

  get quantity() { return this.addOrderForm.get( 'quantity' ); }

  get agree() { return this.addOrderForm.get( 'agree' ); }

  constructor(
    private _apiHelper: ApiHelperService,
    private _formBuilder: FormBuilder,
    private _snack: MatSnackBar
  ) {

  }

  getSubCategories( id: string ) {
    this._apiHelper.getSubCategories( id )
      .subscribe( ( response: ApiResponse ) => {
        if ( response && response.status ) {
          this.subCategories = response.response ? response.response : [];
        } else {
          // Error Handling
        }
      } );
  }

  getServicesList( serviceCategoryId: string, subCategoryId: string ) {
    this._apiHelper.getServicesList( serviceCategoryId, subCategoryId )
      .subscribe( ( response: ApiResponse ) => {
        if ( response && response.status ) {
          this.serviceDetails = response.response ? response.response : [];
        } else {
          // Error Handling
        }
      } );
  }

  getServiceDetail( serviceId: string ) {
    this._apiHelper.getServiceDetail( serviceId )
      .subscribe( ( response: ApiResponse ) => {
        if ( response && response.status ) {
          console.log( response );
        } else {
          // Error Handling
        }
      } );
  }

  onSubCategoryChange( id: string ) {
    this.selectedSubCategory = this.subCategories.find( sc => sc.id === id );
    this.getServicesList( this.serviceCategory.id, id );
  }

  onServiceDetailChange( id: string ) {
    this.selectedServiceDetail = Object.assign( {}, this.serviceDetails.find( sd => sd.id === id ) );
    this.selectedServiceDetail.maxQuantity *= 1;
    this.selectedServiceDetail.minQuantity *= 1;
    this.selectedServiceDetail.servicePrice *= 1;
    this.addOrderForm.controls[ 'quantity' ].setValidators( [
      Validators.min( this.selectedServiceDetail.minQuantity ),
      Validators.max( this.selectedServiceDetail.maxQuantity )
    ] );
    this.getServiceDetail( id );
  }

  addOrder() {
    if ( this.addOrderForm.valid ) {
      this.apiProgress = true;
      this._apiHelper.addOrder( {
        serviceId: this.addOrderForm.value.serviceId,
        link: this.addOrderForm.value.link,
        quantity: this.addOrderForm.value.quantity
      } ).subscribe( ( response: any ) => {
        console.log( response );
        this.apiProgress = false;
        if ( response.status ) {
          this._snack.open( 'Placed order successfully!', null, { duration: 3000, verticalPosition: 'top', panelClass: 'success' } );
        } else {
          this._snack.open( response.response.message, null, { duration: 3000, verticalPosition: 'top', panelClass: 'error' } );
        }
      } );
    }
  }

  ngOnInit() {
    this.addOrderForm = this._formBuilder.group( {
      subCategoryId: [ '', [
        Validators.required
      ] ],
      serviceId: [ '', [
        Validators.required
      ] ],
      link: [ '', [
        Validators.required
      ] ],
      quantity: [ '', [
        Validators.required
      ] ],
      agree: [ '', [
        Validators.required
      ] ]
    } );
  }

  ngOnChanges( changes ) {
    if ( changes && changes.serviceCategory && changes.serviceCategory.currentValue ) {
      this.getSubCategories( this.serviceCategory.id );
    }
  }
}

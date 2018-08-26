import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ApiHelperService } from '../../shared/services';
import { ApiResponse } from '../../shared/types';

@Component( {
  selector: 'lw-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: [ './add-funds.component.scss' ]
} )
export class AddFundsComponent implements OnInit {
  addFundsForm: FormGroup;
  apiProgress: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _apiHelper: ApiHelperService,
    private _snack: MatSnackBar
  ) {

  }

  get orderId() { return this.addFundsForm.get( 'orderId' ); }

  get amount() { return this.addFundsForm.get( 'amount' ); }

  ngOnInit() {
    this.addFundsForm = this._formBuilder.group( {
      orderId: [ '', Validators.required ],
      amount: [ '', [ Validators.required, Validators.min( 5 ) ] ]
    } );
  }

  addFunds() {
    this.apiProgress = true;
    this._apiHelper.addFunds( this.addFundsForm.value.orderId, this.addFundsForm.value.amount )
      .subscribe( ( response: ApiResponse ) => {
        this.apiProgress = false;
        if ( response.status ) {

        } else {
          this._snack.open( response.response.message, null, { duration: 3000, verticalPosition: 'top', panelClass: 'error' } );
        }
      } );
  }
}

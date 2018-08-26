import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatVerticalStepper, MatSnackBar } from '@angular/material';
import { ApiHelperService } from '../../shared/services';
import { ApiResponse } from '../../shared/types';

@Component( {
  selector: 'lw-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: [ './add-funds.component.scss' ]
} )
export class AddFundsComponent implements OnInit {
  scanForm: FormGroup;
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
    this.scanForm = this._formBuilder.group( {
      scanned: [ '', Validators.required ]
    } );
    this.addFundsForm = this._formBuilder.group( {
      orderId: [ '', Validators.required ],
      amount: [ '', [ Validators.required, Validators.min( 5 ) ] ]
    } );
  }

  setScanned( stepper: MatVerticalStepper ) {
    this.scanForm.setValue( {
      scanned: 'Done'
    } );
    stepper.next();
  }

  addFunds( stepper: MatVerticalStepper ) {
    this.apiProgress = true;
    this._apiHelper.addFunds( this.addFundsForm.value.orderId, this.addFundsForm.value.amount )
      .subscribe( ( response: ApiResponse ) => {
        this.apiProgress = false;
        if ( response.status ) {
          stepper.next();
        } else {
          this._snack.open( response.response.message, null, { duration: 3000, verticalPosition: 'top', panelClass: 'error' } );
        }
      } );
  }
}

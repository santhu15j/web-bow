import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as constants from '../constants';
import { ApiHelperService, CoreHelperService } from '../../shared/services';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component( {
  selector: 'lw-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: [ './forgot-password.component.scss' ]
} )
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  errorMessages = constants.errorMessages;
  apiProgress: boolean = false;
  fpSubscription: Subscription = null;

  get email() { return this.forgotPasswordForm.get( 'email' ); }

  constructor(
    public _formBuilder: FormBuilder,
    public _apiHelper: ApiHelperService,
    public _snack: MatSnackBar,
    public _coreHelper: CoreHelperService
  ) { }

  ngOnInit() {
    this.forgotPasswordForm = this._formBuilder.group( {
      email: [ '', [
        Validators.required,
        Validators.email
      ] ]
    } );
  }

  forgotPassword() {
    this.apiProgress = true;
    this.fpSubscription = this._apiHelper.forgotPassword( {
      email: this.forgotPasswordForm.value.email
    } )
      .subscribe( ( response: any ) => {
        this.apiProgress = false;
        console.log( response );
        if ( response && response.response )
          this._snack.open( response.response.message, null, { duration: 3000, verticalPosition: 'top', panelClass: response.status ? 'success' : 'error' } );
      }, error => {
        this.apiProgress = false;
        console.log( error );
        this._snack.open( error.statusText, null, { duration: 3000, verticalPosition: 'top', panelClass: 'error' } );
      } );
  }

  ngOnDestroy() {
    this._coreHelper.unsubscribe( [ this.fpSubscription ] );
  }
}

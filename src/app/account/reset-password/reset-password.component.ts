import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as constants from '../constants';
import { ApiHelperService } from '../../shared/services';
import { MatSnackBar } from '@angular/material';

@Component( {
  selector: 'lw-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: [ './reset-password.component.scss' ]
} )
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  validatorInfos = constants.validator;
  errorMessages = constants.errorMessages;
  viewPassword: boolean = false;
  apiProgress: boolean = false;

  get code() { return this.resetPasswordForm.get( 'code' ); }

  get password() { return this.resetPasswordForm.get( 'password' ); }

  constructor(
    public _formBuilder: FormBuilder,
    public _apiHelper: ApiHelperService,
    public _snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.resetPasswordForm = this._formBuilder.group( {
      code: [ '', [
        Validators.required
      ] ],
      password: [ '', [
        Validators.required,
        Validators.minLength( this.validatorInfos.password.min )
      ] ]
    } );
  }

  resetPassword() {

  }
}

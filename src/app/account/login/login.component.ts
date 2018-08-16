import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as constants from '../constants';
import { ApiHelperService, CoreHelperService } from '../../shared/services';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component( {
  selector: 'lw-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validatorInfos = constants.validator;
  errorMessages = constants.errorMessages;
  viewPassword: boolean = false;
  apiProgress: boolean = false;
  loginSubscription: Subscription = null;

  get userName() { return this.loginForm.get( 'userName' ); }

  get password() { return this.loginForm.get( 'password' ); }

  constructor(
    public _formBuilder: FormBuilder,
    public _apiHelper: ApiHelperService,
    public _snack: MatSnackBar,
    public _router: Router,
    public _coreHelper: CoreHelperService
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group( {
      userName: [ '', [
        Validators.required,
        Validators.minLength( this.validatorInfos.userName.min ),
        Validators.maxLength( this.validatorInfos.userName.max )
      ] ],
      password: [ '', [
        Validators.required,
        Validators.minLength( this.validatorInfos.password.min )
      ] ]
    } );
  }

  login() {
    this.apiProgress = true;
    this.loginSubscription = this._apiHelper.login( {
      user: this.loginForm.value.userName,
      password: this.loginForm.value.password
    } )
      .subscribe( ( response: any ) => {
        this.apiProgress = false;
        console.log( response );
        if ( response && !response.status ) {
          this._snack.open( response.response.message, null, { duration: 3000, verticalPosition: 'top', panelClass: 'error' } );
        }
      }, error => {
        this.apiProgress = false;
        console.log( error );
        this._snack.open( error.statusText, null, { duration: 3000, verticalPosition: 'top', panelClass: 'error' } );
      } );
  }

  ngOnDestroy() {
    this._coreHelper.unsubscribe( [ this.loginSubscription ] );
  }
}

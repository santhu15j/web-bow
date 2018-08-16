import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import * as constants from '../constants';
import { ApiHelperService, CoreHelperService } from '../../shared/services';

import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription';

@Component( {
  selector: 'lw-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ]
} )
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  validatorInfos = constants.validator;
  errorMessages = constants.errorMessages;
  viewPassword: boolean = false;
  apiProgress: boolean = false;
  registerSubscription: Subscription = null;

  get userName() { return this.signupForm.get( 'userName' ); }

  get email() { return this.signupForm.get( 'email' ); }

  get password() { return this.signupForm.get( 'password' ); }

  get agree() { return this.signupForm.get( 'agree' ); }

  constructor(
    public _formBuilder: FormBuilder,
    public _apiHelper: ApiHelperService,
    public _snack: MatSnackBar,
    public _coreHelper: CoreHelperService
  ) { }

  ngOnInit() {
    this.signupForm = this._formBuilder.group( {
      userName: [ '', [
        Validators.required,
        Validators.minLength( this.validatorInfos.userName.min ),
        Validators.maxLength( this.validatorInfos.userName.max )
      ] ],
      email: [ '', [
        Validators.required,
        Validators.email
      ] ],
      password: [ '', [
        Validators.required,
        Validators.minLength( this.validatorInfos.password.min )
      ] ],
      agree: [ '', [
        Validators.required
      ] ]
    } );
  }

  register() {
    this.apiProgress = true;
    this.registerSubscription = this._apiHelper.register( {
      userName: this.signupForm.value.userName,
      password: this.signupForm.value.password,
      email: this.signupForm.value.email,
      skypeId: "demo",
      website: "www.likes.world"
    } )
      .subscribe( ( response: any ) => {
        this.apiProgress = false;
        console.log( response );
        if ( response && !response.status ) {
          this._snack.open( response.response.message, null, { duration: 3000, verticalPosition: 'top', panelClass: 'error' } );
        } else {
          this._snack.open( 'Registered successfully!', null, { duration: 3000, verticalPosition: 'top', panelClass: 'success' } );
        }
      }, error => {
        this.apiProgress = false;
        console.log( error );
        this._snack.open( error.statusText, null, { duration: 3000, verticalPosition: 'top', panelClass: 'error' } );
      } );
  }

  ngOnDestroy() {
    this._coreHelper.unsubscribe( [ this.registerSubscription ] );
  }
}

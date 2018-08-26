import { Component, OnInit } from '@angular/core';
import { CoreHelperService, ApiHelperService } from '../shared/services';
import { Router } from '@angular/router';

@Component( {
  selector: 'lw-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {
  public userModel = this._apiHelper.getCache( 'usermodel' );

  constructor(
    public _coreHelper: CoreHelperService,
    public _apiHelper: ApiHelperService,
    private _router: Router
  ) {

  }

  ngOnInit() {

  }

  logout() {
    this._apiHelper.logout().subscribe();
  }
}

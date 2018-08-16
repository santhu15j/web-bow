import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { ApiHelperService } from '../services';

@Injectable()
export class IsAuthorizedGuard implements CanActivate {
  constructor(
    private _apiHelper: ApiHelperService,
    private _router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): boolean {
    console.log( 'Authorized Guard' );
    const userModel = this._apiHelper.getCache( 'usermodel' );
    if ( userModel ) {
      return true;
    } else {
      this._router.navigate( [ '/account/login' ] );
      return false;
    }
  }
}

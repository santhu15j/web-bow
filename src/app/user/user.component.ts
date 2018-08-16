import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { CoreHelperService, ApiHelperService } from '../shared/services';

@Component( {
  selector: 'lw-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {
  public isMobile: boolean = false;
  public watcherSubscription: Subscription = null;
  public userModel = this._apiHelper.getCache( 'usermodel' );

  constructor(
    public _media: ObservableMedia,
    public _coreHelper: CoreHelperService,
    public _apiHelper: ApiHelperService
  ) {

  }

  ngOnInit() {
    this.watcherSubscription = this._media.subscribe( ( change: MediaChange ) => {
      this.isMobile = change.mqAlias === 'xs';
    } );
  }

  logout() {
    this._apiHelper.logout().subscribe();
  }

  ngOnDestroy() {
    this._coreHelper.unsubscribe( [ this.watcherSubscription ] );
  }
}

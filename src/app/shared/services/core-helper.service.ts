import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Injectable()
export class CoreHelperService {
  public isMobile: boolean = false;
  public mqAlias: string = null;

  constructor(
    private _media: ObservableMedia
  ) {
    this._media.subscribe( ( change: MediaChange ) => {
      this.isMobile = change.mqAlias === 'xs';
      this.mqAlias = change.mqAlias;
    } );
  }

  unsubscribe( subscriptions: Subscription[] ) {
    for ( const subscription of subscriptions ) {
      if ( subscription ) {
        subscription.unsubscribe();
      }
    }
  }

}

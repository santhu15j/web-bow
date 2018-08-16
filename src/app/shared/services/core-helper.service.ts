import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class CoreHelperService {

  constructor() { }

  unsubscribe( subscriptions: Subscription[] ) {
    for ( const subscription of subscriptions ) {
      if ( subscription ) {
        subscription.unsubscribe();
      }
    }
  }

}

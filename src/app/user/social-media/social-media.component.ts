import { Component, OnInit } from '@angular/core';
import { ApiHelperService } from '../../shared/services';
import { ServiceCategory, ApiResponse } from '../../shared/types';

@Component( {
  selector: 'lw-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: [ './social-media.component.scss' ]
} )
export class SocialMediaComponent implements OnInit {
  public serviceCategories: ServiceCategory[] = [];

  constructor(
    private _apiHelper: ApiHelperService
  ) {

  }

  getServiceCategories() {
    this._apiHelper.getServiceCategories()
      .subscribe( ( response: ApiResponse ) => {
        console.log( response );
        if ( response.status ) {
          this.serviceCategories = response.response;
        } else {
          // Error handling
        }
      } );
  }

  ngOnInit() {
    this.getServiceCategories();
  }

}

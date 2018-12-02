import { Component, OnInit } from '@angular/core';
import { ApiHelperService, CoreHelperService } from '../../shared/services';
import { ApiResponse, Fund } from '../../shared/types';

@Component( {
  selector: 'lw-fund-history',
  templateUrl: './fund-history.component.html',
  styleUrls: [ './fund-history.component.scss' ]
} )
export class FundHistoryComponent implements OnInit {
  funds: Fund[] = null;
  currentPage: number = 1;
  isLoadingResults: boolean = false;
  fundColumns: string[] = [ 'No', 'Payment Mode', 'Amount', 'Type', 'Transaction ID', 'Date Time', 'Balance' ];
  fundColumnsInMobile: string[] = [ 'No', 'Payment Mode', 'Type' ];

  constructor(
    private _apiHelper: ApiHelperService,
    public _coreHelper: CoreHelperService
  ) {

  }

  getFundHistory() {
    this.isLoadingResults = true;
    this._apiHelper.getWalletHistory()
      .subscribe( ( response: ApiResponse ) => {
        console.log( response );
        this.isLoadingResults = false;
        if ( response.status ) {
          this.funds = response.response;
          if ( this.funds && this.funds.length > 0 ) {
            this.funds = this.funds.sort( ( a, b ) => parseInt( b.id, 10 ) - parseInt( a.id, 10 ) );
          }
        } else {
          // Error handling
          this.funds = null;
        }
      } );
  }

  ngOnInit() {
    this.getFundHistory();
  }

}

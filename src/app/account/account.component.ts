import { Component, OnInit } from '@angular/core';

import * as constants from './constants';

@Component( {
  selector: 'lw-account',
  templateUrl: './account.component.html',
  styleUrls: [ './account.component.scss' ]
} )
export class AccountComponent implements OnInit {
  public info = constants.accountInfo;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component( {
  selector: 'lw-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: [ './order-details.component.scss' ]
} )
export class OrderDetailsComponent implements OnInit {
  @Input() order: any = null;

  constructor() { }

  ngOnInit() {
  }

}

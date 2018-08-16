import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  LocationStrategy,
  HashLocationStrategy,
  CommonModule
} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { helpers } from './shared/services';
import { guards } from './shared/guards';


@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    NgProgressModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true },
    ...helpers,
    ...guards
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }

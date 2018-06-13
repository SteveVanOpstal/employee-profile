import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {LoginModule} from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {PrefixUrlInterceptorModule} from 'angular-interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes), LoginModule,
    PrefixUrlInterceptorModule.forRoot('https://api-test-dot-solvay-you-dev.appspot.com/')],
  bootstrap: [AppComponent]
})
export class AppModule {
}

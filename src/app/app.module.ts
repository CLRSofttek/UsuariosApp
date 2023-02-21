import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

import localeEs from '@angular/common/locales/es-CL'
import { registerLocaleData } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    UsersModule,
    PipesModule
  ],
 providers: [{
    provide: LOCALE_ID, useValue:'es-CL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

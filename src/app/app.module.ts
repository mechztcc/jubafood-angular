import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { NavModule } from './components/nav/nav.module';
import { TemplatesModule } from './components/templates/templates.module';
import { AddressComponent } from './components/user/pages/address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplatesModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AddressComponent } from './pages/address/address.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    AddressComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }

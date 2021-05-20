import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AddressComponent } from './pages/address/address.component';
import { MainComponent } from './pages/main/main.component';
import { FormAddressComponent } from './components/form-address/form-address.component';
import { EditAddressComponent } from './pages/edit-address/edit-address.component';
import { FormEditAddresComponent } from './components/form-edit-addres/form-edit-addres.component';
import { TemplateModule } from '../template/template.module';


@NgModule({
  declarations: [
    AddressComponent,
    MainComponent,
    FormAddressComponent,
    EditAddressComponent,
    FormEditAddresComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    TemplateModule
  ]
})
export class ClientModule { }

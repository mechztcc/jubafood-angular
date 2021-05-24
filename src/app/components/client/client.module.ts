import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AddressComponent } from './pages/address/address.component';
import { MainComponent } from './pages/main/main.component';
import { FormAddressComponent } from './components/form-address/form-address.component';
import { EditAddressComponent } from './pages/edit-address/edit-address.component';
import { FormEditAddresComponent } from './components/form-edit-addres/form-edit-addres.component';
import { TemplateModule } from '../template/template.module';
import { PromoComponent } from './pages/promo/promo.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { NavegatorComponent } from './components/navegator/navegator.component';
import { CardProdComponent } from './components/card-prod/card-prod.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { arrowLeft, chevronLeft  } from 'ngx-bootstrap-icons';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

const icons = {
  arrowLeft,
  chevronLeft
}


@NgModule({
  declarations: [
    AddressComponent,
    MainComponent,
    FormAddressComponent,
    EditAddressComponent,
    FormEditAddresComponent,
    PromoComponent,
    PizzasComponent,
    NavegatorComponent,
    CardProdComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    TemplateModule,
    // HttpClient
    NgxBootstrapIconsModule.pick(icons)
  ]
})
export class ClientModule { }

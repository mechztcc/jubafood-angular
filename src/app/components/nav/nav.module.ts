import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { NavItemsComponent } from './components/nav-items/nav-items.component';
import { PromoComponent } from './pages/promo/promo.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { CardProdComponent } from './components/card-prod/card-prod.component';
import { SliderComponent } from '../templates/slider/slider.component';


@NgModule({
  declarations: [
    NavComponent,
    NavItemsComponent,
    PromoComponent,
    PizzasComponent,
    CardProdComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }

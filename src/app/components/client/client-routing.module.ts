import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './pages/address/address.component';
import { EditAddressComponent } from './pages/edit-address/edit-address.component';
import { MainComponent } from './pages/main/main.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { PromoComponent } from './pages/promo/promo.component';

const routes: Routes = [
  { path: 'endereco', component: AddressComponent },
  { path: 'endereco/edit', component: EditAddressComponent },
  { path: 'home', component: MainComponent, children: [
      { path: 'promo', component: PromoComponent },
      { path: 'pizzas', component: PizzasComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

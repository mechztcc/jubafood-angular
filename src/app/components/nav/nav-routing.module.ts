import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { PromoComponent } from './pages/promo/promo.component';

const routes: Routes = [
  { path: 'promo', component: PromoComponent },
  { path: 'pizzas', component: PizzasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: 'endereco', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
  { path: 'cardapio', loadChildren: () => import('./components/nav/nav.module').then(m => m.NavModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

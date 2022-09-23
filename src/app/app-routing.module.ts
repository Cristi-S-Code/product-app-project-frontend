import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path: 'login', component: UserComponent},
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterModule) },
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule) },
  { path: 'steps', loadChildren: () => import('./modules/steps-switch/steps-switch.module').then((m) => m.StepsSwitchModule) },
  { path: 'steps/:id', loadChildren: () => import('./modules/steps-switch/steps-switch.module').then((m) => m.StepsSwitchModule) },
  // { path: 'steps/:id', loadChildren: () => import('./modules/steps-switch/steps-switch.module').then((m) => m.ProductListModule) },
  // { path: 'stock', loadChildren: () => import('./modules/stock/stock.module').then((m) => m.StockModule) },
  { path: 'table', loadChildren: () => import('./modules/product-list/product-list.module').then((m) => m.ProductListModule) },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

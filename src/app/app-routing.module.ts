import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path: 'login', component: UserComponent},
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterModule) },
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule) },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  // {path: 'login', component: UserComponent},
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule) },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

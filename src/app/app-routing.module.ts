import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'user', component: UserComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'steps', loadChildren: () => import('./modules/steps-switch/steps-switch.module').then((m) => m.StepsSwitchModule) },
  { path: 'steps/:id', loadChildren: () => import('./modules/steps-switch/steps-switch.module').then((m) => m.StepsSwitchModule) },
  { path: 'table', loadChildren: () => import('./modules/product-list/product-list.module').then((m) => m.ProductListModule) },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

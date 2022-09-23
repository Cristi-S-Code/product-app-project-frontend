import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { StepsSwitchComponent } from 'src/app/components/steps-switch/steps-switch.component';

const tableRoutes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'stock/:pzn', component: ProductListComponent},
  {path: 'product/:pzn', component: ProductComponent}
]
// const stepsRoutes: Routes = [ 
//   {path: 'product/:pzn', component: StepsSwitchComponent},
// ]


@NgModule({
  imports: [
    RouterModule.forChild(tableRoutes),
    // RouterModule.forChild(stepsRoutes)
  ],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }

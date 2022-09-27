import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductComponent } from 'src/app/components/product/product.component';

const tableRoutes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'stock/:pzn', component: ProductListComponent},
  {path: 'product/:pzn', component: ProductComponent}
]



@NgModule({
  imports: [
    RouterModule.forChild(tableRoutes),
  ],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }

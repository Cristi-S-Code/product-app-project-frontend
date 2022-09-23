import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StepsSwitchComponent } from 'src/app/components/steps-switch/steps-switch.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { StockComponent } from 'src/app/components/stock/stock.component';

@NgModule({
  imports: [
		RouterModule.forChild([
			{path:'',component: StepsSwitchComponent, children:[
				{path:'', redirectTo: 'product', pathMatch: 'full'},
				{path: 'product', component: ProductComponent},
				{path: 'stock/:id', component: StockComponent}
			]}
		])
	],
  exports: [RouterModule]
})
export class StepsSwitchRoutingModule { }

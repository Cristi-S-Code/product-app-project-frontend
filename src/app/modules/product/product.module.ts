import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from 'src/app/components/product/product.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    SelectButtonModule,
    FormsModule,
    StepsModule,
    // ToastModule
    
  ]
})
export class ProductModule { }

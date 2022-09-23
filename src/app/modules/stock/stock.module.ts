import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from 'src/app/components/stock/stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockRoutingModule } from './stock-routing.module';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { StockSharedModule } from '../stock-shared/stock-shared.module';


@NgModule({
  declarations: [
    // StockComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StockRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
  ],
  exports: [
    // StockComponent,
    CommonModule, 
    FormsModule
  ]
})
export class StockModule { }

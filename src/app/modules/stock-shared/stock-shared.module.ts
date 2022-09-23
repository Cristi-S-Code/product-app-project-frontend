import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from 'src/app/components/stock/stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepsSwitchRoutingModule } from '../steps-switch/steps-switch-routing.module';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StockRoutingModule } from '../stock/stock-routing.module';



@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepsSwitchRoutingModule,
    FormsModule,
    StepsModule,
    CardModule,
    HttpClientModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    SelectButtonModule,
    StockRoutingModule

  ],
  exports: [StockComponent]
})
export class StockSharedModule { }

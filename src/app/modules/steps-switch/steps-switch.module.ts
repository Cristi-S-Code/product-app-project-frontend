import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsSwitchComponent } from 'src/app/components/steps-switch/steps-switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepsSwitchRoutingModule } from './steps-switch-routing.module';
import { StepsModule } from 'primeng/steps';
import { ProductComponent } from 'src/app/components/product/product.component';
import { StockComponent } from 'src/app/components/stock/stock.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StepsSwitchService } from 'src/app/services/steps-switch.service';


@NgModule({
  declarations: [
    StepsSwitchComponent,
    ProductComponent,
    StockComponent
  ],
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
  ],
  providers: [
    StepsSwitchService
  ]
})
export class StepsSwitchModule { }

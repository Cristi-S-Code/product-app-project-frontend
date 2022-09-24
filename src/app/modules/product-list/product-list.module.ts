import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListRoutingModule } from './product-list-routing.module';
import {CardModule} from 'primeng/card';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { StockComponent } from 'src/app/components/stock/stock.component';
import { StockModule } from '../stock/stock.module';
import { StepsSwitchModule } from '../steps-switch/steps-switch.module';
import { StockSharedModule } from '../stock-shared/stock-shared.module';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { HomeModule } from '../home/home.module';
import { HomeRoutingModule } from '../home/home-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,

    // StockComponent ---inlocuit
    // StockSharedModule
  ],
  entryComponents: [
    StockComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    ProductListRoutingModule,
    FormsModule,
    CardModule,
    PasswordModule,
    DividerModule,
    TableModule,
    // DialogModule,
    ButtonModule,
    TieredMenuModule,
    // StepsSwitchModule
  ]
})
export class ProductListModule { }

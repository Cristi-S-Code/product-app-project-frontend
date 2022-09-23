import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from 'src/app/components/product/product.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {StepsModule} from 'primeng/steps';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    // ProductComponent
  ],
  imports: [
    // BrowserModule,
    // CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    SelectButtonModule,
    FormsModule,
    StepsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    // BrowserAnimationsModule
    // ToastModule
    
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListRoutingModule } from './product-list-routing.module';
import {CardModule} from 'primeng/card';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {InputTextModule} from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    ProductListComponent,
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
    ButtonModule,
    TieredMenuModule,
    InputTextModule,
    ToastModule
  ]
})
export class ProductListModule { }

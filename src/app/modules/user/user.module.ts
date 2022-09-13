import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { UserComponent } from 'src/app/components/user/user.component';
import {ButtonModule} from 'primeng/button';
import { UserRoutingModule } from './user-routing.module';
import {PasswordModule} from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from "primeng/divider";
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    DividerModule,
    AutoCompleteModule
  ]
})
export class UserModule { }

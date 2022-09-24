import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { interceptorProviders } from './interceptors/interceptors.interceptor';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockDetailsComponent,
    RegisterComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    DividerModule,
    MenubarModule
    
  ],
  exports: [
    CommonModule,
    ApplicationModule
  ],
  providers: [DatePipe, UserService,interceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // AppRoutingModule
  ],
})
export class HomeModule { }

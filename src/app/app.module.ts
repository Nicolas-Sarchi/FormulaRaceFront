import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { TeamsComponent } from './teams/teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule}  from "./material/material.module";
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriversComponent,
    TeamsComponent,
    FormComponent,
    NavbarComponent,
    ProductTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

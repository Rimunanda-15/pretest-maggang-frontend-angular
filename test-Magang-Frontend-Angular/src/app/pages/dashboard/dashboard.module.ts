import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { UserInputComponent } from './user/user-input/user-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserService } from './user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user/user-details/user-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent,
    UserInputComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }

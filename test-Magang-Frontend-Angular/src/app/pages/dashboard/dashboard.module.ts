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


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }

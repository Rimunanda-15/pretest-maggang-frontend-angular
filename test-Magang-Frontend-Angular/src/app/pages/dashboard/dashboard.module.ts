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
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { CategoryServiceService } from './category/category-service.service';
import { ProductInputComponent } from './product/product-input/product-input.component';
import { CategoryInputComponent } from './category/category-input/category-input.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductServiceService } from './product/product-service.service';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent,
    UserInputComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    ProductInputComponent,
    CategoryInputComponent,
    CategoryDetailsComponent,
    CategoryUpdateComponent,
    ProductUpdateComponent,
    ProductEditComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    CategoryServiceService,
    ProductServiceService
  ]
})
export class DashboardModule { }

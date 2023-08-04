import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserInputComponent } from './user/user-input/user-input.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { CategoryComponent } from './category/category.component';
import { CategoryInputComponent } from './category/category-input/category-input.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { ProductComponent } from './product/product.component';
import { ProductInputComponent } from './product/product-input/product-input.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'user',
    component:UserComponent
  },
  {
    path: 'user/add',
    component: UserInputComponent
  },
  {
    path:'user/userdetails/:id',
    component: UserDetailsComponent
  },
  {
    path: 'user/useredit/:id',
    component:UserUpdateComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'category/add',
    component:CategoryInputComponent
  },
  {
    path:'category/categorydetails/:id',
    component: CategoryDetailsComponent
  },
  {
    path: 'category/categoryedit/:id',
    component:CategoryUpdateComponent
  },
  {
    path: 'product', 
    component: ProductComponent
  },
  {
    path: 'product/add',
    component: ProductInputComponent
  },
  {
    path:'product/productdetails/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'product/productedit/:id',
    component: ProductUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserInputComponent } from './user/user-input/user-input.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserInputComponent } from './pages/dashboard/user/user-input/user-input.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "user/buy/:id",
    component: UserPageComponent
  },
  {
    path: "thankyou",
    component: ThankYouComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

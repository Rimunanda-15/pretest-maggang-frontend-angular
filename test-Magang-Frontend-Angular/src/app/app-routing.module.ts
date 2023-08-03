import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
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

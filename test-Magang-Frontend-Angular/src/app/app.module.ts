import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInputComponent } from './pages/dashboard/user/user-input/user-input.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './pages/dashboard/user/user.service';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    UserPageComponent,
    ThankYouComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogintComponent } from './components/logint/logint.component';
import { InterfazComponent } from './components/interfaz/interfaz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { SignuptComponent } from './components/signupt/signupt.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardtComponent } from './components/dashboardt/dashboardt.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogintComponent,
    InterfazComponent,
    SignupComponent,
    SignuptComponent,
    DashboardComponent,
    DashboardtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

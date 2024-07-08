import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogintComponent } from './components/logint/logint.component';
import { InterfazComponent } from './components/interfaz/interfaz.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignuptComponent } from './components/signupt/signupt.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardtComponent } from './components/dashboardt/dashboardt.component';

const routes: Routes = [
  {path: '', redirectTo: '/interfaz', pathMatch: 'full'},
  {path:'interfaz', component: InterfazComponent},
  {path:'login', component: LoginComponent},
  {path:'logint', component: LogintComponent},
  {path:'signup',component:SignupComponent},
  {path:'signupt',component:SignuptComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboardt',component:DashboardtComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

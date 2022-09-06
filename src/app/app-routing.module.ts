import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ClasesyComponent } from './components/clasesy/clasesy.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path:"", component : HomeComponent },
  { path:"clases", component : ClasesyComponent},
  { path:"calendario", component: CalendarioComponent},
  { path:"eventos", component: EventosComponent},
  { path:"registro", component: RegisterComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

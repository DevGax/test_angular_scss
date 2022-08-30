import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ClasesyComponent } from './components/clasesy/clasesy.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:"", component : HomeComponent },
  { path:"clases", component : ClasesyComponent},
  {path:"calendario", component: CalendarioComponent},
  {path:"eventos", component: EventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

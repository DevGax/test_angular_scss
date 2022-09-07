import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//-- MATERIAL--

import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClasesyComponent } from './components/clasesy/clasesy.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ImplicitReceiver } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ClasesyComponent,
    CalendarioComponent,
    EventosComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

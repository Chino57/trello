import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetComponent } from "./components/projet/projet.component";
import { ListeComponent } from './components/liste/liste.component';
import { CarteComponent } from './components/carte/carte.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    ListeComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

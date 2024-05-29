import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { Page2Component } from './pages/page2/page2.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModificaComponent } from './pages/modifica/modifica.component';
import {  HttpClientModule } from '@angular/common/http';
import { AddSmartphoneComponent } from './pages/add-smartphone/add-smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component,
    HeaderComponent,
    FooterComponent,
    ModificaComponent,
    AddSmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

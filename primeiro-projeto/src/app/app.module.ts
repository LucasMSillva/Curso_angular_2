import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.componet'; // importamos aqui declarando dessa forma.

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent //adicionamos aqui nosso component e depois importamos aqui na parte de cima.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

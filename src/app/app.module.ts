import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import {PaginatorModule} from "primeng/paginator";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { MariaComponent } from './maria/maria.component';
import { PedroComponent } from './pedro/pedro.component';
import { JoseComponent } from './jose/jose.component';
@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    MariaComponent,
    PedroComponent,
    JoseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginatorModule,
    TableModule,
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

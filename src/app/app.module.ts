import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyMaterialModule } from './my-material.module';

import { ClientesComponent } from './clientes/clientes.component';
import { DetalhesPedidosComponent } from './detalhes-pedidos/detalhes-pedidos.component';
import { EnderecosComponent } from './enderecos/enderecos.component';
import { FaturamentosComponent } from './faturamentos/faturamentos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PdfComponent } from './pdf/pdf.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    DetalhesPedidosComponent,
    EnderecosComponent,
    FaturamentosComponent,
    PedidosComponent,
    ProdutosComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

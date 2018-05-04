import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { DetalhesPedidosComponent } from './detalhes-pedidos/detalhes-pedidos.component';
import { EnderecosComponent } from './enderecos/enderecos.component';
import { FaturamentosComponent } from './faturamentos/faturamentos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'detalhes-pedidos', component: DetalhesPedidosComponent },
  { path: 'enderecos', component: EnderecosComponent },
  { path: 'faturamentos', component: FaturamentosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'produtos', component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

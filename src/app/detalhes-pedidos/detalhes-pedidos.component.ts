import { Component, OnInit } from '@angular/core';
import { DetalhesPedidoService } from './shared/detalhes-pedido.service';
import { DetalhesPedido } from './shared/detalhes-pedido';

@Component({
  selector: 'app-detalhes-pedidos',
  providers: [DetalhesPedidoService],
  templateUrl: './detalhes-pedidos.component.html',
  styleUrls: ['./detalhes-pedidos.component.scss']
})
export class DetalhesPedidosComponent implements OnInit {

  detalhesPedidos: DetalhesPedido[];

  constructor(private detalhesPedidoService: DetalhesPedidoService) { }

  ngOnInit() {

    this.detalhesPedidoService
      .getDetalhesPedidosPaginado(1000, 1)
      .subscribe(response => this.detalhesPedidos = response);
  }
}

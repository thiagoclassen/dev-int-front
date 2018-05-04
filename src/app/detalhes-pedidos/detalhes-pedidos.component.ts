import { Component, OnInit } from '@angular/core';
import { DetalhesPedidosService } from './shared/detalhes-pedidos.service';
import { DetalhesPedido } from './shared/detalhes-pedido';

@Component({
  selector: 'app-detalhes-pedidos',
  providers: [DetalhesPedidosService],
  templateUrl: './detalhes-pedidos.component.html',
  styleUrls: ['./detalhes-pedidos.component.scss']
})
export class DetalhesPedidosComponent implements OnInit {

  detalhesPedidos: DetalhesPedido[];

  constructor(private detalhesPedidosService: DetalhesPedidosService) { }

  ngOnInit() {

    this.detalhesPedidosService
      .getDetalhesPedido()
      .subscribe(response => this.detalhesPedidos = response);
  }
}

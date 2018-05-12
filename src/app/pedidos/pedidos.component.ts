import { Component, OnInit } from '@angular/core';
import { Pedido } from './shared/pedido';
import { PedidoService } from './shared/pedido.service';

@Component({
  selector: 'app-pedidos',
  providers: [PedidoService],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService
      .getPedidosPaginado(1000, 1)
      .subscribe(response => this.pedidos = response);
  }

}

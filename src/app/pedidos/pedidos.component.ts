import { Component, OnInit } from '@angular/core';
import { Pedido } from './shared/pedido';
import { PedidosService } from './shared/pedidos.service';

@Component({
  selector: 'app-pedidos',
  providers: [PedidosService],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[];

  constructor(private pedidoService: PedidosService) { }

  ngOnInit() {
    this.pedidoService
      .getPedidos()
      .subscribe(response => this.pedidos = response);
  }

}

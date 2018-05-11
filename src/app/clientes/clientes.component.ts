import { Component, OnInit } from '@angular/core';
import { ClienteService } from './shared/cliente.service';
import { Cliente } from './shared/cliente';

@Component({
  selector: 'app-clientes',
  providers: [ClienteService],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clienteService
      .getClientes()
      .subscribe(response => this.clientes = response);
  }

  private getClienteByName(cliente) {
    cliente = '';
    this.clienteService
      .getCliente(cliente)
      .subscribe(response => this.clientes = response);
  }
}

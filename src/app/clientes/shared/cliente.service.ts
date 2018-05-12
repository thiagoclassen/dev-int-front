import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './cliente';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClienteService {

  path = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.path);
  }

  getCliente(cliente): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.path + '/' + cliente);
  }

  getPedidosComDetalhes(cliente, scope='ultimos_pedidos_faturados'): Observable<any[]> {
    const options = { params: { scope: scope } };
    return this.http.get<any[]>(this.path + '/' + cliente + "/pedidos_com_detalhes", options);
  }

  getPedidosComDetalhesPaginado(cliente, limit, page, scope='ultimos_pedidos_faturados'): Observable<any[]> {
    const options = { params: { limit: limit, page: page, scope: scope } };
    return this.http.get<any[]>(this.path + '/' + cliente + "/pedidos_com_detalhes", options);
  }

}

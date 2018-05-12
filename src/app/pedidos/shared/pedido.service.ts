import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedido } from './pedido';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PedidoService {

  path = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.path);
  }
  getPedidosPaginado(limit, page): Observable<Pedido[]> {
    const options = {
      params: {
        limit: limit,
        page: page
      }
    };
    return this.http.get<Pedido[]>(this.path, options);
  }
  
  getPedidosDoCliente(cliente): Observable<Pedido[]> {
    const options = {
      params: { cliente: cliente }
    };
    return this.http.get<Pedido[]>(this.path, options);
  }
  getPedidosDoClientePaginado(cliente, limit, page): Observable<Pedido[]> {
    const options = {
      params: {
        cliente: cliente,
        limit: limit,
        page: page
      }
    };
    return this.http.get<Pedido[]>(this.path, options);
  }

}
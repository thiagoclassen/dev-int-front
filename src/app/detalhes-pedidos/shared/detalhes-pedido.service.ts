import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DetalhesPedido } from './detalhes-pedido';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DetalhesPedidoService {

  path = 'http://localhost:3000/detalhesPedidos';

  constructor(private http: HttpClient) { }

  getDetalhesPedidos(): Observable<DetalhesPedido[]> {
    return this.http.get<DetalhesPedido[]>(this.path);
  }
  getDetalhesPedidosPaginado(limit, page): Observable<DetalhesPedido[]> {
    const options = {
      params: {
        limit: limit,
        page: page
      }
    };
    return this.http.get<DetalhesPedido[]>(this.path, options);
  }

  getDetalhesDoPedido(pedido): Observable<DetalhesPedido[]> {
    const options = {
      params: { pedido: pedido }
    };
    return this.http.get<DetalhesPedido[]>(this.path);
  }

}

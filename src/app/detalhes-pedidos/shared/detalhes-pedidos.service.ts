import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DetalhesPedido } from './detalhes-pedido';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DetalhesPedidosService {

  path = 'http://localhost:3000/detalhesPedidos';

  constructor(private http: HttpClient) { }

  getDetalhesPedido(): Observable<DetalhesPedido[]> {
    return this.http.get<DetalhesPedido[]>(this.path);
  }

  getDetalhesDeUmPedido(pedido): Observable<DetalhesPedido[]> {
    const options = { params: { pedido_id: pedido } };
    return this.http.get<DetalhesPedido[]>(this.path);
  }

}

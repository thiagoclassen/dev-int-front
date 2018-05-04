import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedido } from './pedido';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PedidosService {

  path = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.path);
  }

}

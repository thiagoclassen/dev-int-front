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
    const options = { params: cliente = cliente };
    return this.http.get<Cliente[]>(this.path, options);
  }

}

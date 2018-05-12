import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Endereco } from './endereco';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnderecoService {

  path = 'http://localhost:3000/enderecos';

  constructor(private http: HttpClient) { }

  getEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.path);
  }
  getEnderecosPaginado(limit, page): Observable<Endereco[]> {
    const options = {
      params: {
        limit: limit,
        page: page
      }
    };
    return this.http.get<Endereco[]>(this.path, options);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from './produto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdutoService {

  path = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.path);
  }

}

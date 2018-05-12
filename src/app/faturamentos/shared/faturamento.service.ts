import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Faturamento } from './faturamento';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FaturamentoService {

  path = 'http://localhost:3000/faturamentos';

  constructor(private http: HttpClient) { }

  getFaturamentos(): Observable<Faturamento[]> {
    return this.http.get<Faturamento[]>(this.path);
  }

  criarFaturamento(data_fim): Observable<Faturamento[]> {
    const options = { data_fim: data_fim };
    return this.http.post<Faturamento[]>(this.path + "/criar", options);
  }

  getResumoMes(): Observable<any[]> {
    return this.http.get<any[]>(this.path + "/resumo_mes");
  }

  getResumoProdutoMes(produto): Observable<any[]> {
    const options = {
      params: { produto_id: produto }
    };
    return this.http.get<any[]>(this.path + "/resumo_produto_mes", options);
  }

  getResumoProdutoAno(produto): Observable<any[]> {
    const options = {
      params: { produto_id: produto }
    };
    return this.http.get<any[]>(this.path + "/resumo_produto_ano", options);
  }
}

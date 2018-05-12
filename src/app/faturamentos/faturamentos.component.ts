import { Component, OnInit } from '@angular/core';
import { FaturamentoService } from './shared/faturamento.service';
import { Faturamento } from './shared/faturamento';

@Component({
  selector: 'app-faturamentos',
  providers: [FaturamentoService],
  templateUrl: './faturamentos.component.html',
  styleUrls: ['./faturamentos.component.scss']
})
export class FaturamentosComponent implements OnInit {

  faturamentos: Faturamento[];

  constructor(private faturamentosService: FaturamentoService) { }

  ngOnInit() {

    this.faturamentosService
      .getFaturamentos()
      .subscribe(response => this.faturamentos = response);  }

}

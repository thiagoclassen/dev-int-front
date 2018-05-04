import { Component, OnInit } from '@angular/core';
import { Produto } from './shared/produto';
import { ProdutoService } from './shared/produto.service';

@Component({
  selector: 'app-produtos',
  providers: [ProdutoService],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService
      .getProdutos()
      .subscribe(response => this.produtos = response);
  }

}

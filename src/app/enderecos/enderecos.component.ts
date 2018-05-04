import { Component, OnInit } from '@angular/core';
import { Endereco } from './shared/endereco';
import { EnderecoService } from './shared/endereco.service';

@Component({
  selector: 'app-enderecos',
  providers: [EnderecoService],
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.scss']
})
export class EnderecosComponent implements OnInit {

  enderecos: Endereco[];

  constructor(private enderecosService: EnderecoService) { }

  ngOnInit() {
    this.enderecosService
      .getEnderecos()
      .subscribe(response => this.enderecos = response);
  }

}

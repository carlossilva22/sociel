import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'sociel-crianca',
  templateUrl: './crianca.component.html',
  styleUrls: ['./crianca.component.scss'],
})
export class CriancaComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  produtos: Produto[] = [];

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService
      .getProdutos()
      .subscribe((produtos) => (this.produtos = produtos));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  getCrianca(produtos: any): any {
    return produtos.category === 'Criança';
  }
}

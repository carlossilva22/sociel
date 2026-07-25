import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../model/produto';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'sociel-homem',
  templateUrl: './homem.component.html',
  styleUrls: ['./homem.component.scss'],
})
export class HomemComponent implements OnInit {
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
  getHomem(produtos: any): any {
    return produtos.category === 'Homem';
  }
}

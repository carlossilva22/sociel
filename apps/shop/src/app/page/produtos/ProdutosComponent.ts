import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'sociel-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  titulo: any | undefined;
  p: number | undefined = 1;
  itemsPerPage: number | undefined = 6;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  totalProduct: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // eslint-disable-next-line @typescript-eslint/member-ordering

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService
      .getProdutos()
      .subscribe((produtos) => (this.produtos = produtos));
    this.totalProduct = this.produtos.length;
  }

  Search() {
    this.ngOnInit();
    if (this.titulo == '') {
      this.ngOnInit();
    } else if (this.titulo == this.titulo) {
      this.produtos = this.produtos.filter((res) => {
        return res.modelo
          ?.toLocaleLowerCase()
          .match(this.titulo.toLocaleLowerCase());
      });
    }
  }
}

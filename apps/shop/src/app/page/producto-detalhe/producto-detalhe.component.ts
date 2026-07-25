import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'sociel-producto-detalhe',
  templateUrl: './producto-detalhe.component.html',
  styleUrls: ['./producto-detalhe.component.scss'],
})
export class ProductoDetalheComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  produtos: Produto | undefined;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduto();
  }

  getProduto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService
      .getProduto(id)
      .subscribe((produtos) => (this.produtos = produtos));
  }

  goBack(): void {
    this.location.back();
  }
}

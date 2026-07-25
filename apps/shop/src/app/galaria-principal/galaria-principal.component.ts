import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sociel-galaria-principal',
  templateUrl: './galaria-principal.component.html',
  styleUrls: ['./galaria-principal.component.scss'],
})
export class GalariaPrincipalComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService
      .getProdutos()
      .subscribe((produtos) => (this.produtos = produtos));
  }
}

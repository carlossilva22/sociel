/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

import { PRODUTOS } from '../model/mockProduto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor() {}

  getProdutos(): Observable<Produto[]> {
    const produtos = of(PRODUTOS);
    return produtos;
  }

  getProduto(id: number): Observable<Produto | undefined> {
    const produto = PRODUTOS.find((p) => p.id === id);
    return of(produto);
  }
}

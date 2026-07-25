import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './page/history/history.component';
import { ProdutosComponent } from './page/produtos/ProdutosComponent';
import { ProductoDetalheComponent } from './page/producto-detalhe/producto-detalhe.component';
import { ContactComponent } from './page/contact/contact.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { HomemComponent } from './page/categories/homem/homem.component';
import { SenhoraComponent } from './page/categories/senhora/senhora.component';
import { CriancaComponent } from './page/categories/crianca/crianca.component';
import { GalleryDetalhesComponent } from './gallery-detalhes/gallery-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'product',
    component: ProdutosComponent,
  },
  {
    path: 'homem',
    component: HomemComponent,
  },
  {
    path: 'senhora',
    component: SenhoraComponent,
  },
  {
    path: 'galaria',
    component: GalleryDetalhesComponent,
  },
  {
    path: 'crianca',
    component: CriancaComponent,
  },
  {
    path: 'details/:id',
    component: ProductoDetalheComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}

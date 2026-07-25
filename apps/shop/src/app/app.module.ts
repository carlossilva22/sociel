import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FooterPageComponent } from './page/footer-page/footer-page.component';
import { HomeComponent } from './home/home.component';

import { MenuComponent } from './menu/menu.component';
import { GalariaPrincipalComponent } from './galaria-principal/galaria-principal.component';
import { MenusComponent } from './page/menus/menus.component';
import { HistoryComponent } from './page/history/history.component';
import { ProdutosComponent } from './page/produtos/ProdutosComponent';
import { ContactComponent } from './page/contact/contact.component';
import { ProductoDetalheComponent } from './page/producto-detalhe/producto-detalhe.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoService } from './services/produto.service';
import { SliderDirective } from './page/producto-detalhe/slider.directive';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { HomemComponent } from './page/categories/homem/homem.component';
import { SenhoraComponent } from './page/categories/senhora/senhora.component';
import { CriancaComponent } from './page/categories/crianca/crianca.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgxPaginationModule } from 'ngx-pagination';
import { GalleryComponent } from './page/gallery/gallery.component';
import { GalleryDetalhesComponent } from './gallery-detalhes/gallery-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterPageComponent,
    HomeComponent,
    MenuComponent,
    GalariaPrincipalComponent,
    MenusComponent,
    HistoryComponent,
    ProdutosComponent,
    ContactComponent,
    ProductoDetalheComponent,
    SliderDirective,
    NotFoundComponent,
    HomemComponent,
    SenhoraComponent,
    CriancaComponent,
    GalleryComponent,
    GalleryDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 2000,
    }),
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent],
})
export class AppModule {}

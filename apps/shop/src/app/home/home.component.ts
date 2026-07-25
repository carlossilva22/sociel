import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../services/historia.service';
import { Video } from '../model/video';
import { Fabrica } from '../model/fabrica';
import { FabricaService } from '../services/fabrica.service';

@Component({
  selector: 'sociel-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public videos: Video[] = [];
  public fabricas: Fabrica[] = [];

  constructor(
    public historiaService: HistoriaService,
    public fabricaService: FabricaService
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.videos = this.historiaService.getHistorias().slice(0, 3);
    this.fabricas = this.fabricaService.getFabrica();
  }
}

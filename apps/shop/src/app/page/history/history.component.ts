import { Component, OnInit } from '@angular/core';
import { Fabrica } from '../../model/fabrica';
import { FabricaService } from '../../services/fabrica.service';
import { Video } from '../../model/video';
import { HistoriaService } from '../../services/historia.service';

@Component({
  selector: 'sociel-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public mostrar = false;

  public videoList: Video[] = [];
  public fabricas: Fabrica[] = [];

  constructor(
    public fabricaService: FabricaService,
    public historyService: HistoriaService
  ) {}

  ngOnInit(): void {
    this.fabricas = this.fabricaService.getFabrica();
    this.videoList = this.historyService.getHistorias();
  }

  show(): void {
    this.mostrar = true;
  }

  esconder() {
    this.mostrar = false;
  }
}

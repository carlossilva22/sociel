import { Injectable } from '@angular/core';

import { Video } from '../model/video';

@Injectable({
  providedIn: 'root',
})
export class HistoriaService {
  constructor() {}

  public getHistorias(): Video[] {
    return [
      {
        title: './assets/Sociel_ETV_Entrevista.png',
        videoId: 'U9tjWfkeoZE',
      },
      {
        title: './assets/fabricaOculos.png',
        videoId: 'uu97xE-s6e4',
      },
      {
        title: './assets/sic_noticias.png',
        videoId: 'iSw4XMQ6V5k',
      },
      {
        title: './assets/sic_noticias.png',
        videoId: 'sQg5WsFsh2E',
      },
    ];
  }
}

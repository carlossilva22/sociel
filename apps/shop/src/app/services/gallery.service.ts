import { Injectable } from '@angular/core';
import { Gallery } from '../model/gallery';
import { Gallarias } from '../model/mockGallery';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor() {}

  getGallery(): Observable<Gallery[]> {
    const galeries = of(Gallarias);
    return galeries;
  }
}

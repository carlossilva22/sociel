import { Component, OnInit } from '@angular/core';
import { Gallery } from '../model/gallery';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'sociel-gallery-detalhes',
  templateUrl: './gallery-detalhes.component.html',
  styleUrls: ['./gallery-detalhes.component.scss'],
})
export class GalleryDetalhesComponent implements OnInit {
  galarias: Gallery[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.getGallery();
  }

  getGallery(): void {
    this.galleryService
      .getGallery()
      .subscribe((galarias) => (this.galarias = galarias));
  }
}

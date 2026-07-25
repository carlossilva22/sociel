import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDetalhesComponent } from './gallery-detalhes.component';

describe('GalleryDetalhesComponent', () => {
  let component: GalleryDetalhesComponent;
  let fixture: ComponentFixture<GalleryDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryDetalhesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

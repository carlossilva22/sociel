/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[socielSlider]',
})
export class SliderDirective {
  constructor(private el: ElementRef) {}
  @HostListener('click')
  imageChenge() {
    const src: any = this.el.nativeElement.src;
    const prev: any = document.getElementById('preview');
    prev.src = src;
    const imageSilde = document.getElementsByClassName('img-slide');
    for (let i = 0; i < imageSilde.length; i++) {
      imageSilde[i].classList.remove('active');
    }
    this.el.nativeElement.parentElement.classList.add('active');
  }
}

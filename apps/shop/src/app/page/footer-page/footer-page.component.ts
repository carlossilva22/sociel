import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sociel-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss'],
})
export class FooterPageComponent implements OnInit {
  document: any;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  public date = new Date();

  ngOnInit(): void {}
}

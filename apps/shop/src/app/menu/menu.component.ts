import { Component, OnInit } from '@angular/core';
import { slideInLeft, slideInRight } from '../../common/animations';

@Component({
  selector: 'sociel-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [slideInRight, slideInLeft],
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  show = false;
}

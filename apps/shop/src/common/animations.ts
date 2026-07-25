import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const slideIn = trigger('slideIn', [
  state(
    '*',
    style({
      transform: 'translateX(100%)',
    })
  ),
  state(
    'in',
    style({
      transform: 'translateX(0)',
    })
  ),
  state(
    'out',
    style({
      transform: 'translateX(-100%)',
    })
  ),
  transition('* => in', animate('200ms ease-in')),
  transition('in => out', animate('200ms ease-in')),
]);

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)',
    }),
    animate(
      '600ms',
      style({
        transform: 'translateX(0)',
        display: 'flex',
      })
    ),
  ]),
  transition(':leave', [
    style({
      transform: 'translateX(0)',
      display: 'flex',
    }),
    animate(
      '600ms',
      style({
        transform: 'translateX(-100%)',
      })
    ),
  ]),
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({
      transform: 'translateX(100%)',
    }),
    animate(
      '400ms',
      style({
        transform: 'translateX(0)',
        display: 'flex',
      })
    ),
  ]),
  transition(':leave', [
    style({
      transform: 'translateX(0)',
      display: 'flex',
    }),
    animate(
      '600ms',
      style({
        transform: 'translateX(100%)',
      })
    ),
  ]),
]);

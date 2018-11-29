import {animate, style, transition, trigger} from '@angular/animations';

export const PICKLIST_ANIMATION = [
  trigger('list', [
    transition(':enter', []),
    transition(':leave', [])
  ]),
  trigger('item', [
    transition(':enter', [
      style({transform: 'scale(0.5)', opacity: 0, height: 0}),
      animate('300ms ease-in-out',
        style({transform: 'scale(1)', opacity: 1, height: '*'}))
    ]),
    transition(':leave', [
      style({transform: 'scale(1)', opacity: 1, height: '*'}),
      animate('300ms ease-in-out',
        style({transform: 'scale(0.5)', opacity: 0, height: 0}))
    ]),
    transition('* => up', [
      style({transform: 'translateY(0%)'}),
      animate('300ms ease-in-out',
        style({transform: 'translateY(-100%)'}))
    ]),
    transition('* => down', [
      style({transform: 'translateY(0%)'}),
      animate('300ms ease-in-out',
        style({transform: 'translateY(100%)'}))
    ])
  ])
];

import {animate, group, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const sample = trigger( 'sample' , [
  state('normal' , style({ background: 'red' , transform: 'translateX(0)'})),
  state('change' , style({ background: 'blue' , transform: 'translateX(100px  )'})),
  transition('normal <=> change' , animate(1000))
]);
export const dropdown = trigger( 'dropdown' , [
  state('normal' , style({height: '0px' , opacity: '0' , visibility: 'hidden' , transition: 'height 500ms'})),
  state('change' , style({ height: '100%'  , opacity: '1' , visibility: 'visible' })),
  transition( 'normal <=> change' , animate('500ms'))
]);
export const fader = trigger('routeAnimation' , [
    transition( '* <=> *', [
      query(':enter , :leave' , [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateX(100%)',
        })
      ]),
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateX(0)' })),
      ])
    ])
  ]);
export const  slider = trigger('routeAnimation' , [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);
export const item = trigger( 'itemAnim' , [
  transition(':enter', [
    style({
      height: '0' , opacity: 0 , transform: 'translateX(50%)'
    }),
    animate( '100ms' , style({
      height : '*'})),
    animate(200)
  ]) ,
  transition(':leave' , [
    animate('50ms' , style({ transform: 'scale(1.1)'})),
    animate('100ms' , style({  opacity : '0.68' , transform: 'translateX(-50%)'})),
    animate('200ms' , style({ transform: 'translateX(-100%)' , opacity : '0'}))
  ])
]);
export const stage =  trigger('listAnim' , [
  transition( '* <=> *' , [
    query(':enter' , [
      style({
        opacity: 0, height: 0
      }),
      stagger( 100 , [animate('0.2s ease')])
    ], {optional: true})
  ])
]);
// tslint:disable-next-line:typedef
function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: -20,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%'}))
      ])
    ]),
  ];
}

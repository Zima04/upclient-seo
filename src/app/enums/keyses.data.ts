import { KeysCardInterface } from '../interface/keys-card.interface';

export const KEYSES_DATA: KeysCardInterface[] = [{
  image: '/assets/block-2/card-1_bg-img@2x.png',
  objectType: 1,
  header: 'Архитектурное бюро «Zrobym Architects»',
  subHeader: '5 месяцев продвижения, регион Минск',
  cells: [
    {
      fieldValue: '81%',
      subscription: 'видимость сайта'
    },
    {
      fieldValue: '38%',
      subscription: 'позиций в топ 3'
    },
    {
      fieldValue: '74%',
      subscription: 'позиций в топ 10'
    },
  ]
}, {
  image: '/assets/block-2/card-2_bg-img@2x.png',
  objectType: 2,
  header: 'Школа иностранных языков «SOL»',
  subHeader: '5 месяцев продвижения, регион РБ',
  cells: [
    {
      fieldValue: '818 → 2733',
      subscription: 'новые пользователи'
    },
    {
      fieldValue: '334,10%',
      subscription: 'увеличение трафика'
    },
  ]
},
  {
    image: '/assets/block-2/card-3_bg-img@2x.png',
    objectType: 2,
    header: 'Пекарня осетинских пирогов «Такие пироги»',
    subHeader: '5 месяцев продвижения, регион Минск',
    cells: [
      {
        fieldValue: '3 → 96',
        subscription: 'новые пользователи'
      },
      {
        fieldValue: '3 200%',
        subscription: 'увеличение трафика'
      },
    ]
  }
];

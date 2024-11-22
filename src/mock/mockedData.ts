import type { Destination, ICity } from '@/utils/common'

export const destinations: Destination[] = [
  {
    name: 'Montpellier, France',
    description:
      'Montpellier, ville ensoleillée du sud de la France, allie patrimoine médiéval, modernité, dynamisme universitaire et qualité de vie méditerranéenne.',
    imageSrc: '/images/montpellier.jpg',
    imageAlt: 'Montpellier',
    id: 'montpellier',
  },
  {
    name: 'Prague, République tchèque',
    description:
      'Prague, capitale de la République tchèque, séduit par son architecture médiévale, son histoire riche et son atmosphère romantique.',
    imageSrc: '/images/prague.jpg',
    imageAlt: 'Prague',
    id: 'prague',
  },
  {
    name: 'Edimbourg, Ecosse',
    description:
      'Édimbourg, capitale écossaise, allie histoire médiévale, château emblématique, festivals animés et paysages impressionnants entre collines et mer.',
    imageSrc: '/images/edimbourg.jpg',
    imageAlt: 'Edimbourg',
    id: 'edimbourg',
  },
]

export const cities: ICity[] = [
  {
    id: 'montpellier',
    name: 'Montpellier',
    description:
      'Montpellier, ville ensoleillée du sud de la France, allie patrimoine médiéval, modernité, dynamisme universitaire et qualité de vie méditerranéenne.',
    details: [
      { name: 'Pays', description: 'France' },
      {
        name: 'Langue',
        description: 'Français',
      },
      { name: 'Démographie', description: '~300.000 habitants' },
      { name: 'Météo', description: 'Ensoleillé' },
      { name: 'A proximité', description: 'Plages, montagnes' },
      {
        name: 'A ne pas manquer',
        description: 'Jardins du Peyrou, Arc de triomphe, Opéra Comédie, GC Tech',
      },
    ],
  },
  {
    id: 'prague',
    name: 'Prague',
    description:
      'Prague, capitale de la République tchèque, séduit par son architecture médiévale, son histoire riche et son atmosphère romantique.',
    details: [
      { name: 'Pays', description: 'République Tchèque' },
      {
        name: 'Langues',
        description: 'Tchèque',
      },
      { name: 'Démographie', description: '~1.300.000 habitants' },
      { name: 'Météo', description: 'Frais' },
      { name: 'A proximité', description: 'Forêts, Parcs naturels' },
      {
        name: 'A ne pas manquer',
        description: 'Musée, Cathédrale, Restaurants gastronomiques',
      },
    ],
  },
  {
    id: 'edimbourg',
    name: 'Edimbourg',
    description:
      'Édimbourg, capitale écossaise, allie histoire médiévale, château emblématique, festivals animés et paysages impressionnants entre collines et mer.',
    details: [
      { name: 'Pays', description: 'Ecosse' },
      {
        name: 'Langue',
        description: 'Anglais',
      },
      { name: 'Démographie', description: '~500.000 habitants' },
      { name: 'Météo', description: 'Nuageux' },
      { name: 'A proximité', description: 'Lacs, Montagnes' },
      {
        name: 'A ne pas manquer',
        description: 'Vieille ville, Arthurs Seat, Jardins botaniques',
      },
    ],
  },
]

import type { TeachingSection } from '@/types/sections/teaching-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { unitn, unige } from '../helpers/links';

const teachingSectionData = {
  config: {
    title: 'Teaching',
    slug: 'teaching',
    icon: 'mdi:teaching',
    visible: true,
  },
  teaching: [
    {
      title: 'Teaching Assistant',
      institution: 'University of Trento',
      image: import('@/assets/logos/unitn-logo.png'),
      dates: [new Date('2020.09'), null],
      description: 'Teaching Assistant for the Computer Science course "Programmazione 1".',
      links: [unitn({ url: 'https://www.unitn.it/en' })],
    },
    {
      title: 'Teacher',
      institution: 'University of Genoa',
      image: import('@/assets/logos/unige-logo.jpg'),
      dates: [new Date('2023.10'), new Date('2023.11')],
      description: "Teacher at the Cybersecurity and Critical Infrastructure Protection Master",
      links: [unige({ url: 'https://www.unige.it/en' })],
    }
  ],
} as const satisfies ReadonlyDeep<TeachingSection>;

export default teachingSectionData;

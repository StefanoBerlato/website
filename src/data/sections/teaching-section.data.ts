import type { TeachingSection } from '@/types/sections/teaching-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { unitn, unige, website } from '../helpers/links';

const teachingSectionData = {
  config: {
    title: 'Teaching, Seminars, and Outreach Events',
    slug: 'teaching',
    icon: 'mdi:teaching',
    visible: true,
    showSelectedOnly: false,
  },
  teaching: [
    {
      title: 'Teaching Assistant',
      institution: 'University of Trento',
      image: import('@/assets/logos/unitn-logo.png'),
      dates: [new Date('2024.09'), null],
      description: 'Teaching Assistant for the master courses "Advanced Programming of Cryptographic Methods" and "Cryptographic Protocols for Secure Networks and Applications"; preparation of lectures and exams, marking and grading of exams.',
      links: [unitn({ url: 'https://www.unitn.it/en' })],
    },
    {
      title: 'Seminar',
      institution: 'I.I.S. TRON ZANELLA',
      image: import('@/assets/logos/tron.png'),
      dates: [new Date('2025.02'), new Date('2025.02')],
      description: 'Seminar "I Perché e i Come della Ricerca: Il Lavoro del Ricercatore nel Campo della Sicurezza Informatica" at the Tron-Zanella high school.',
      links: [website({ url: 'https://www.tronzanella.edu.it/' })],
    },
    {
      title: 'Teaching Assistant',
      institution: 'University of Trento',
      image: import('@/assets/logos/unitn-logo.png'),
      dates: [new Date('2020.09'), new Date('2024.09')],
      description: 'Teaching Assistant for the bachelor course "Programming 101"; preparation of lectures and exams, marking and grading of exams.',
      links: [unitn({ url: 'https://www.unitn.it/en' })],
    },
    {
      title: 'Seminar',
      institution: 'I.I.S. TRON ZANELLA',
      image: import('@/assets/logos/tron.png'),
      dates: [new Date('2024.02'), new Date('2024.02')],
      description: 'Seminar "I Perché e i Come della Ricerca: Il Lavoro del Ricercatore nel Campo della Sicurezza Informatica" at the Tron-Zanella high school.',
      links: [website({ url: 'https://www.tronzanella.edu.it/' })],
    },
    {
      title: 'Teacher',
      institution: 'University of Genoa',
      image: import('@/assets/logos/unige-logo.jpg'),
      dates: [new Date('2023.10'), new Date('2023.11')],
      description: 'Lecturer in advanced applications for access control in the "Cybersecurity and Critical Infrastructure Protection" professional specialization course.',
      links: [unige({ url: 'https://www.unige.it/en' })],
    },
    {
      title: 'Guest Lecturer',
      institution: 'University of Trento',
      image: import('@/assets/logos/unitn-logo.png'),
      dates: [new Date('2023.05'), new Date('2023.05')],
      description: 'Guest lecture in data security for applications based on cloud-edge computing in the "Fog and Cloud Computing" master course at the University of Trento.',
      links: [unitn({ url: 'https://www.unitn.it/en' })],
    },
    {
      title: 'Guest Lecturer',
      institution: 'University of Genoa',
      image: import('@/assets/logos/unige-logo.jpg'),
      dates: [new Date('2022.04'), new Date('2023.03')],
      description: 'Guest lecture in zero trust in authorization – cryptographic enforcement of access control policies – in the "Digital Identity: Enrollment, Authentication, and All That" PhD course at the University of Genoa.',
      links: [unige({ url: 'https://www.unitn.it/en' })],
    }
  ],
} as const satisfies ReadonlyDeep<TeachingSection>;

export default teachingSectionData;


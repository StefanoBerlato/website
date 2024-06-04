import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { unitn, pdf, unige, github } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
    showSelectedOnly: false,
  },
  diplomas: [
    {
      title: 'PhD',
      institution: 'University of Genoa \& Fondazione Bruno Kessler',
      image: import('@/assets/logos/unige-logo.jpg'),
      dates: [new Date('2020.11'), new Date('2023.10')],
      description: 'PhD in Security, Risk and Vulnerability, Cybersecurity and Reliable Artificial Intelligence curriculum with the thesis "**A Security Service for Performance-Aware End-to-End Protection of Sensitive Data in Cloud Native Applications**".',
      links: [pdf({ url: 'theses/thesis_phd.pdf' }), unige({ url: 'https://www.unige.it/en' })],
    },
    {
      title: 'Master degree',
      institution: 'University of Trento',
      image: import('@/assets/logos/unitn-logo.png'),
      dates: [new Date('2017.09'), new Date('2019.07')],
      description: 'Master degree in Computer Science, ICT Innovation - Security\&Privacy curriculum (110 cum laude) with the thesis "**A Pragmatic Approach to Handle \"Honest but Curious\" Cloud Service Providers: Cryptographic Enforcement of Dynamic Access Control Policies**".\n <span style="color:#2980b9; font-weight: bold;">Awarded 3rd prize at Thesis Award «Innovating information security» 15th edition - 2019, Clusit</span>.',
      links: [pdf({ url: 'theses/thesis_master.pdf' }), unitn({ url: 'https://www.unitn.it/en' }), github({ url: 'https://github.com/StefanoBerlato/Master-Thesis' })]
    },
    {
      title: 'Bachelor degree',
      institution: 'University of Trento',
      image: import('@/assets/logos/unitn-logo.png'),
      dates: [new Date('2014.09'), new Date('2017.07')],
      description: 'Bachelor degree in Computer Science (110 cum laude) with the thesis "**Development of a web based Interface for the Orchestration of Machine Learning Components**".',
      links: [pdf({ url: 'theses/thesis_bachelor.pdf' }), unitn({ url: 'https://www.unitn.it/en' }), github({ url: 'https://github.com/StefanoBerlato/Bachelor-Thesis' })]
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

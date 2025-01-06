import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { fbk, aleph, unige, none, unitn ,github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  cloudnative,
  kotlin,
  blockchain,
  devsecops,
  authorization,
  authentication,
  appliedcryptography,
  internetofthings,
  automotive,
  reverseengineering,
  android,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
    showSelectedOnly: false,
  },
  jobs: [
    {
      role: 'Researcher',
      company: 'Fondazione Bruno Kessler',
      image: import('@/assets/logos/fbk-logo.png'),
      dates: [new Date('2023-11'), null],
      description: `Research on applied cryptography, identity and access management, and cybersecurity for cloud native applications. Development of tools for research and demonstration purposes in kotlin. Supervision of interns, BSc and MSc students.`,
      tagsList: {
        title: 'Topics',
        tags: [appliedcryptography(), authentication(), authorization(), devsecops(), cloudnative(), kotlin()],
      },    
      links: [fbk({ url: 'https://www.fbk.eu/en/' }), aleph({ url: 'https://aleph.fbk.eu/' })],
      selected: true,
    },
    {
      role: 'PhD',
      company: 'University of Genoa \& Fondazione Bruno Kessler',
      image: import('@/assets/logos/unige-logo.jpg'),
      dates: [new Date('2020-11'), new Date('2023-10')],
      description: `Joint PhD on cryptographic access control in cloud-edge-IoT applications (e.g., Cooperative Connected and Automated Mobility) and design of architectural models for optimal enforcement of cryptographic access control policies.`,
      tagsList: {
        title: 'Topics',
        tags: [appliedcryptography(), authorization(), internetofthings(), automotive()],
      },
      links: [unige({ url: 'https://unige.it/en' }), fbk({ url: 'https://www.fbk.eu/en/' })],
      selected: true,
    },
    {
      role: 'Research Assistant',
      company: 'Fondazione Bruno Kessler',
      image: import('@/assets/logos/fbk-logo.png'),
      dates: [new Date('2018-10'), new Date('2020-10')],
      description: `Research activities on access control in the Cloud, mobile and automotive security. Research activities on Cooperative, Connected and Automated Mobility (5G-CARMEN project). Study and design of reverse engineering protections for Java and Android Apps.`,
      tagsList: {
        title: 'Topics',
        tags: [blockchain()],
      }, 
      links: [fbk({ url: 'https://www.fbk.eu/en/' })],
      selected: true,
    },
    {
      role: 'Intern',
      company: '2ASPIRE',
      image: import('@/assets/logos/2aspire-logo.png'),
      dates: [new Date('2018-07'), new Date('2018-10')],
      description: `Research and analysis of best practices against malicious Reverse Engineering (RE) to increase the company's knowhow in Android RE antitampering and anti-debugging protections.`,
      tagsList: {
        title: 'Topics',
        tags: [reverseengineering(), android()],
      }, 
      links: [],
      selected: true,
    },
    {
      role: 'IT Assistant',
      company: 'University of Trento',
      image: import('@/assets/logos/unitn-logo.png'),
      dates: [new Date('2017-07'), new Date('2017-08')],
      description: `150 hours working contract under the "Information Systems Management" office, Support the deployment of the Digital University project, a new platform serving as Knowledge HUB within the University of Trento.`,
      tagsList: {
        title: 'Topics',
        tags: [none()],
      }, 
      links: [unitn({ url: 'https://www.unitn.it/en' })],
      selected: false,
    },
    {
      role: 'Intern',
      company: 'Heas srl',
      image: import('@/assets/logos/heas-logo.png'),
      dates: [new Date('2016-06'), new Date('2016-09')],
      description: `Design of 2 plugins for the web-based SCADA platform ATVISE® in compliance with high-level HMI industrial standards. Developed gestures and tablet-style functionalities, dynamic object instantiation and linking to PLC data.`,
      tagsList: {
        title: 'Topics',
        tags: [none()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/heas-studio/' })],
      selected: false,
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

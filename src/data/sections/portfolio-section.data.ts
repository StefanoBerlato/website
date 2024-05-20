import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, youtube } from '../helpers/links';
import {
  java,
  apache,
  sql,
  android,
  arduino,
  bluetooth,
  react,
  raspberry,
  python,
  kotlin,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Open Source Projects',
    slug: 'openSourceProjects',
    icon: 'fa6-solid:rocket',
    visible: true,
    showSelectedOnly: false,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  openSourceProjects: [
    {
      name: 'Kotlin Multiplatform for OpenABE',
      image: import('@/assets/portfolio/kabe.png'),
      dates: [new Date('2022-03'), null],
      details: [
        { label: 'Team size', value: '1 people' },
        { label: 'My role', value: 'Developer' },
        { label: 'Scope', value: 'Open Source Project' },
        { label: 'Category', value: ['Library', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: '/kABE', url: 'https://github.com/StefanoBerlato/kotlin-multiplatform-openabe' },
      ],
      description:
        'A wrapper allowing to easily use the OpenABE library for Attribute-based Encryption (ABE) from Kotlin multiplatform.',
      tagsList: {
        title: 'Technologies',
        tags: [kotlin(), react()],
      },
      links: [github({ url: 'https://github.com/StefanoBerlato/kotlin-multiplatform-openabe' })],
    },
    {
      name: 'Joni',
      image: import('@/assets/portfolio/joni.png'),
      dates: [new Date('2018-02'), new Date('2018-07')],
      details: [
        { label: 'Team size', value: '6 people' },
        { label: 'My role', value: 'Back-end Developer' },
        { label: 'Scope', value: 'University Project' },
        { label: 'Category', value: ['Android app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: '/joni', url: 'https://github.com/StefanoBerlato/Joni' },
      ],
      description:
        'University project for building Joni, a tool meant to help blind and visually impaired people to keep in touch with the world. The project comprised the validation of the business idea through concrete analysis on the field and market research with the goal to make news and podcasts accessible by the blind community.',
      tagsList: {
        title: 'Technologies',
        tags: [raspberry(), python()],
      },
      links: [github({ url: 'https://github.com/StefanoBerlato/Joni' })],
    },
    {
      name: 'Glumo',
      image: import('@/assets/portfolio/glumo.png'),
      dates: [new Date('2017-02'), new Date('2017-06')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: 'Back-end Developer' },
        { label: 'Scope', value: 'University Project' },
        { label: 'Category', value: ['Android app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: '/glumo', url: 'https://github.com/StefanoBerlato/Glumo' },
      ],
      description:
        'University project for building an Android app, called Glumo, to help people who suffer from diabetes with features like automatic alarms and emergency SMS. The project comprised the design of monitoring services with direct bluetooth connection with modern glycemic sensors.',
      tagsList: {
        title: 'Technologies',
        tags: [android(), arduino(), bluetooth()],
      },
      links: [github({ url: 'https://github.com/StefanoBerlato/Glumo' }), youtube({ url: 'https://www.youtube.com/watch?v=D86wqLJcGTc&t=24s' })],
    },
    {
      name: 'Eater',
      image: import('@/assets/portfolio/eater.png'),
      dates: [new Date('2016-02'), new Date('2016-06')],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: 'Back-end Developer' },
        { label: 'Scope', value: 'University Project' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: '/eater', url: 'https://github.com/StefanoBerlato/eater' },
      ],
      description:
        'University project for building a web application for finding and reviewing restaurants. The project comprised the Agile design and development of the web application with a Java backend, the implementation of the Model-View-Control (MVC) and the DAO pattern for decoupling logic and storage.',
      tagsList: {
        title: 'Technologies',
        tags: [java(), apache(), sql()],
      },
      links: [github({ url: 'https://github.com/StefanoBerlato/eater' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;

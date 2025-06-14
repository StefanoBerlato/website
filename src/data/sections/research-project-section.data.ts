import type { ResearchProjectSection } from '@/types/sections/research-project-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website, youtube, linkedin } from '../helpers/links';
import {
  automotive,
  appliedcryptography, 
  authentication, 
  authorization,
  internetofthings,
  attributeBasedEncryption,
  blockchain,
  cloud,
  cloudnative,
  devsecops,
} from '../helpers/skills';

const researchProjectSectionData = {
  config: {
    title: 'Research and Industrial Projects',
    slug: 'researchProjects',
    icon: 'pepicons-pop:earth-europe',
    visible: true,
    showSelectedOnly: false,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  researchProjects: [
    {
      name: 'SERICS',
      image: import('@/assets/researchProject/serics.png'),
      dates: [new Date('2023-01'), null],
      details: [
        { label: 'Consortium', value: '24 partners' },
        { label: 'My role', value: 'Contributor' },
        { label: 'Funding', value: 'PNRR | NextGenerationEU (PE00000014)' },
        { label: 'Coordinator', value: "University of Salerno" },
      ],
      pdfDetails: [],
      description:
        'Within the SeRiCS ("Security and Rights in CyberSpace") Italian partnership, the project SecCo ("Securing Containers") aims at supporting the secure development and deployment of containerized applications on distributed and heterogeneous architectures, while the project STRIDE ("Secure and TRaceable Identities in Distributed Environments") aims at supporting the secure, protected, and accountable identification of entities and actions through digital identity and access control. Relevant partners are CNR - Consiglio Nazionale delle Ricerche, Telsy S.p.A., ENI, and CINI - Consorzio Interuniversitario Nazionale per l\'Informatica.',
      tagsList: {
        title: 'Topics',
        tags: [attributeBasedEncryption(), cloudnative(), devsecops(), authorization(), appliedcryptography()],
      },
      links: [website({ url: 'https://serics.eu/' })],
    },
    {
      name: 'ECTEG Blockchain',
      image: import('@/assets/researchProject/ecteg_blockchain.png'),
      dates: [new Date('2024-09'), new Date('2025-04')],
      details: [
        { label: 'Consortium', value: '7 partners' },
        { label: 'My role', value: 'Contributor' },
        { label: 'Funding', value: 'ECTEG' },
        { label: 'Coordinator', value: "French Gendarmerie" },
      ],
      pdfDetails: [],
      description:
        'The European Cybercrime Training and Education Group (ECTEG) blockchain project aims to develop a course on blockchain technology to train and educate law enforcement agents (LEA) and Judicial authorities fighting criminal activities that exploit blockchain-related resources, such as cryptocurrencies. Merging experiences and prior developments is key to ensure a compound and multifaceted training product, that covers the myriad of challenges blockchain technology presents for criminal investigations. As usual, practical and theoretical skills and knowledge will be put to work, while the cooperation with Eurojust-ECJN is key to map the procedures in the EU to include different guidelines/legislation for the seizing of cryptoassets.',
      tagsList: {
        title: 'Topics',
        tags: [blockchain(), appliedcryptography()],
      },
      links: [website({ url: 'https://www.ecteg.eu/running/blockchain-project/' })],
    },
    {
      name: 'METAfora',
      image: import('@/assets/researchProject/metafora.jpg'),
      dates: [new Date('2022-01'), new Date('2024-12')],
      details: [
        { label: 'Consortium', value: '2 partners' },
        { label: 'My role', value: 'Contributor' },
        { label: 'Funding', value: 'bit4id' },
        { label: 'Coordinator', value: "bit4id" },
      ],
      pdfDetails: [],
      description:
        'METAfora wants to implement new and innovative models of digital identity management and use, placing itself in the strategic confluence between the evolutions of European regulations on the subject, thus a regulated and top-down context, and the dynamics of growth and evolution arising from below, understood as the whole world that is now described as metaverse.',
      tagsList: {
        title: 'Topics',
        tags: [appliedcryptography(), attributeBasedEncryption()],
      },
      links: [website({ url: 'https://aleph.fbk.eu/projects/METAfora' })],
    },
    {
      name: 'FAMILIAR',
      image: import('@/assets/researchProject/familiar.png'),
      dates: [new Date('2023-08'), new Date('2024-08')],
      details: [
        { label: 'Consortium', value: '7 partners' },
        { label: 'My role', value: 'Contributor' },
        { label: 'Funding', value: 'Autonomous Province of Trento' },
        { label: 'Coordinator', value: "Zucchetti Healthcare" },
      ],
      pdfDetails: [],
      description:
        'The project aims to conceive and develop a platform (called Familiar) that enables the creation of a coordination system for Long Term Care (LTC) services using innovative digital technologies, with a specific focus on the field of dementia. The ultimate goal is to enhance the quality of life for patients and increase support for their families. Relevant partners are Zucchetti Healthcare, Shifton, SDA Bocconi, Upipa, AIP - Associazione Italiana di Psicogeriatria.',
      tagsList: {
        title: 'Topics',
        tags: [appliedcryptography(), authentication(), authorization(), blockchain(), cloud()],
      },
      links: [website({ url: 'https://aleph.fbk.eu/projects/FAMILIAR/' })],
    },
    {
      name: '5G CARMEN',
      image: import('@/assets/researchProject/5g-carmen.jpg'),
      dates: [new Date('2018-11'), new Date('2021-10')],
      details: [
        { label: 'Consortium', value: '27 partners' },
        { label: 'My role', value: 'Contributor' },
        { label: 'Funding', value: 'Horizon 2020 (ICT-18-2018)' },
        { label: 'Coordinator', value: "Fondazione Bruno Kessler" },
      ],
      pdfDetails: [],
      description:
        'The 5G-CARMEN (5G for Connected and Automated Road Mobility in the European UnioN) project is a medium-term effort to significantly drive the research, implementation, and demonstration of refined 5G solutions for the Cooperative, Connected, and Automated Mobility. Relevant partners are Deutsche Telekom AG, BMW Group, Centro Ricerche FIAT, TIM, NOKIA, and Qualcomm.',
      tagsList: {
        title: 'Topics',
        tags: [automotive(), authorization(), blockchain(), internetofthings()],
      },
      links: [website({ url: 'https://5g-ppp.eu/5g-carmen/' }), youtube({ url: 'https://www.youtube.com/watch?v=daxptHOXTI4&list=PLY3KsH4gpiNpnSENkDBAtyoUirk1xpacw' }), linkedin({ url: 'https://www.linkedin.com/company/5g-carmen/about/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ResearchProjectSection>;

export default researchProjectSectionData;

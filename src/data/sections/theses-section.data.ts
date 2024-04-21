import type { ThesesSection } from '@/types/sections/theses-section.types';
import type { ReadonlyDeep } from 'type-fest';

const thesesSectionData = {
  config: {
    title: 'Supervised Theses',
    slug: 'theses',
    icon: 'ic:round-supervisor-account',
    visible: true,
  },
  theses: [
    {
      authors: 'Simone Brunello',
      title: 'Cryptographic Access Control for Balancing Trust, Protection, and Performance',
      venue: 'Bachelor in Computer Science at the University of Trento (2024)',
      links: [],
    },
    {
      authors: 'Ion Andy Ditu',
      title: 'Leveraging Trusted Execution Environment for Efficient Revocation and Security in Cryptographic Access Control',
      venue: 'Bachelor in Computer Science at the University of Trento (2023)',
      links: [],
    },
    {
      authors: 'Erica Elia',
      title: 'A Key Recovery Protocol based on Threshold Secret Sharing for Cryptographic Access Control in the Cloud: The CryptoAC Use Case',
      venue: 'Master in Mathematics at the University of Trento (2023)',
      links: [],
    },
    {
      authors: 'Enrico Marconi',
      title: 'Combining Blockchain-as-a-Service and Cryptographic Access Control for Secure Data Sharing Across Multiple Organizations',
      venue: 'Bachelor in Computer Science at the University of Trento (2022)',
      links: [],
    },
    {
      authors: 'Alessandro Colombo',
      title: 'Attribute Based Encryption for Advanced Data Protection in IoT with MQTT',
      venue: 'Bachelor in Computer Science at the University of Trento (2022)',
      links: [],
    },
    {
      authors: 'Veronica Cristiano',
      title: 'Key Management for Cryptographic Enforcement of Access Control Policies in the Cloud: The CryptoAC Use Case',
      venue: 'Master in Mathematics at the University of Trento (2021)',
      links: [],
    },
    {
      authors: 'Chaudhry Muhammad Suleman',
      title: 'Cyber-security Risk Assessment for Cooperative, Connected and Automated Mobility: Application to Cooperative Lane Merging',
      venue: 'master in Computer Science at the University of Trento (2021)',
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ThesesSection>;

export default thesesSectionData;

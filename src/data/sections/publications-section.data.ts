import type { PublicationsSection } from '@/types/sections/publications-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { pdf, doi, ieee, acm, springer, scitepress, elsevier } from '../helpers/links';

const publicationsSectionData = {
  config: {
    title: 'Publications',
    slug: 'publications',
    icon: 'material-symbols:article-outline',
    visible: true,
    showSelectedOnly: true,
  },
  publications: [
    {
      authors: 'Stefano Berlato, Roberto Carbone, Silvio Ranise',
      title: 'A Methodology for the Experimental Performance Evaluation of Access Control Enforcement Mechanisms based on Business Processes',
      venue: 'in Journal of Information Security and Applications (JISA)',
      links: [pdf({ url: 'publications/JISA2025.pdf' }), doi({ url: 'https://doi.org/10.1016/j.jisa.2025.104158' }), elsevier({ url: 'https://www.sciencedirect.com/science/article/pii/S2214212625001954?via%3Dihub' })],
      selected: true,
    },
    {
      authors: 'Stefano Berlato, Umberto Morelli, Roberto Carbone, Silvio Ranise',
      title: 'A Secure and Quality of Service-Aware Solution for the End to End Protection of IoT Applications',
      venue: 'in Journal of Network and Computer Applications (JNCA)',
      links: [pdf({ url: 'publications/JNCA2025.pdf' }), doi({ url: 'https://doi.org/10.1016/j.jnca.2025.104246' }), elsevier({ url: 'https://www.sciencedirect.com/science/article/abs/pii/S1084804525001432?via%3Dihub' })],
      selected: true,
    },
    {
      authors: 'Simone Brunello, Stefano Berlato, Roberto Carbone, Adam J. Lee, Silvio Ranise',
      title: 'Relying on Trust to Balance Protection and Performance in Cryptographic Access Control',
      venue: 'in 30th ACM Symposium on Access Control Models and Technologies (SACMAT 2025)',
      links: [pdf({ url: 'publications/SACMAT2025.pdf' }), doi({ url: 'https://doi.org/10.1145/3734436.3734452' }), acm({ url: 'https://dl.acm.org/doi/10.1145/3734436.3734452' })],
      selected: true,
    },
    {
      authors: 'Ion Andy Ditu, Stefano Berlato, Matteo Busi, Roberto Carbone, Silvio Ranise',
      title: 'Work-in-Progress: Optimizing Performance of User Revocation in Cryptographic Access Control with Trusted Execution Environments',
      venue: 'in 2nd Workshop on Operating Systems and Virtualization Security (OSVS 2025)',
      links: [pdf({ url: 'publications/OSVS2025.pdf' })],
      selected: true,
    },
    {
      authors: 'Stefano Berlato, Matteo Rizzi, Matteo Franzil, Silvio Cretti, Pietro De Matteis, Roberto Carbone',
      title: 'Work-in-Progress: A Sidecar Proxy for Usable and Performance-Adaptable End-to-End Protection of Communications in Cloud Native Applications',
      venue: 'in 1st Workshop on Operating Systems and Virtualization Security (OSVS 2024)',
      links: [pdf({ url: 'publications/OSVS2024.pdf' }), doi({ url: 'https://doi.org/10.1109/EuroSPW61312.2024.00086' }), ieee({ url: 'https://ieeexplore.ieee.org/document/10628670/' })],
      selected: true,
    },
    {
      authors: 'Stefano Berlato, Silvio Cretti, Domenico Siracusa, Silvio Ranise',
      title: 'Multi-Objective Microservice Orchestration: Balancing Security and Performance in CCAM',
      venue: 'in 27th Conference on Innovation in Clouds, Internet and Networks (ICIN 2024)',
      links: [pdf({ url: 'publications/ICIN2024.pdf' }), doi({ url: 'https://doi.org/10.1109/ICIN60470.2024.10494482' }), ieee({ url: 'https://ieeexplore.ieee.org/document/10494482' })],
      selected: true,
    },
    {
      authors: 'Davide Pizzolotto, Stefano Berlato, Mariano Ceccato',
      title: 'Mitigating Debugger-based Attacks to Java Applications with Self-Debugging',
      venue: 'in ACM Transactions on Software Engineering and Methodology (TOSEM)',
      links: [pdf({ url: 'publications/TOSEM2024.pdf' }), doi({ url: 'https://doi.org/10.1145/3631971' }), acm({ url: 'https://dl.acm.org/doi/10.1145/3631971' })],
      selected: true,
    },
    {
      authors: 'Stefano Berlato, Umberto Morelli, Roberto Carbone, Silvio Ranise',
      title: 'End-to-End Protection of IoT Communications Through Cryptographic Enforcement of Access Control Policies',
      venue: 'in 36th Annual IFIP WG 11.3 Conference on Data and Applications Security and Privacy (DBSec 2022)',
      links: [pdf({ url: 'publications/DBSec2022.pdf' }), doi({ url: 'https://doi.org/10.1007/978-3-031-10684-2_14' }), springer({ url: 'https://link.springer.com/chapter/10.1007/978-3-031-10684-2_14' })],
      selected: false,
    },
    {
      authors: 'Stefano Berlato, Marco Centenaro, Silvio Ranise',
      title: 'Smart Card-Based Identity Management Protocols for V2V and V2I Communications in CCAM: a Systematic Literature Review',
      venue: 'in IEEE Transactions on Intelligent Transportation Systems (T-ITS)',
      links: [pdf({ url: 'publications/TITS2021.pdf' }), doi({ url: 'https://doi.org/10.1109/TITS.2021.3118721' }), ieee({ url: 'https://ieeexplore.ieee.org/document/9576545' })],
      selected: true,
    },
    {
      authors: 'Stefano Berlato, Roberto Carbone, Adam J. Lee, Silvio Ranise',
      title: 'Formal Modelling and Automated TradeOff Analysis of Enforcement Architectures for Cryptographic Access Control in the Cloud',
      venue: 'in ACM Transactions on Privacy and Security (TOPS)',
      links: [pdf({ url: 'publications/TOPS2021.pdf' }), doi({ url: 'https://doi.org/10.1145/3474056' }), acm({ url: 'https://dl.acm.org/doi/10.1145/3474056' })],
      selected: true,
    },
    {
      authors: 'Marco Centenaro, Stefano Berlato, Roberto Carbone, Gianfranco Burzio, Giuseppe Faranda Cordella, Roberto Riggio, and Silvio Ranise',
      title: 'Safety-Related Cooperative, Connected, and Automated Mobility Services: Interplay Between Functional and Security Requirements',
      venue: 'in IEEE Vehicular Technology Magazine (VTM)',
      links: [pdf({ url: 'publications/VTM2021.pdf' }), doi({ url: 'https://doi.org/10.1109/MVT.2021.3089144' }), ieee({ url: 'https://ieeexplore.ieee.org/document/9486856' })],
      selected: true,
    },
    {
      authors: 'Andreas Heider-Aviet, Danny Roswin Ollik, Stefano Berlato, Silvio Ranise, Roberto Carbone, Van Thanh Le, Nabil El Ioini, Claus Pahl, Hamid R. Barzegar',
      title: 'Blockchain Based RAN Data Sharing',
      venue: 'in IEEE International Conference on Smart Data Services 2021 (SMDS 2021)',
      links: [pdf({ url: 'publications/SMDS2021.pdf' }), doi({ url: 'https://doi.org/10.1109/SMDS53860.2021.00029' }), ieee({ url: 'https://ieeexplore.ieee.org/document/9592464' })],
      selected: true,
    },
    {
      authors: 'Stefano Berlato, Roberto Carbone, Silvio Ranise',
      title: 'Cryptographic Enforcement of Access Control Policies in the Cloud: Implementation and Experimental Assessment',
      venue: 'in 18th International Conference on Security and Cryptography (SECRYPT 2021)',
      links: [pdf({ url: 'publications/SECRYPT2021.pdf' }), doi({ url: 'https://doi.org/10.5220/0010608003700381' }), scitepress({ url: 'https://www.scitepress.org/Link.aspx?doi=10.5220/0010608003700381' })],
      selected: false,
    },
    {
      authors: 'Marco Centenaro, Stefano Berlato, Roberto Carbone, Gianfranco Burzio, Giuseppe Faranda Cordella, Silvio Ranise, Roberto Riggio',
      title: 'Security Considerations on 5G-Enabled Back-Situation Awareness for CCAM',
      venue: 'in IEEE 3rd 5G World Forum (5GWF 2020)',
      links: [pdf({ url: 'publications/IEEE5GWF2020.pdf' }), doi({ url: 'https://doi.org/10.1109/5GWF49715.2020.9221064' }), ieee({ url: 'https://ieeexplore.ieee.org/document/9221064' })],
      selected: false,
    },
    {
      authors: 'Stefano Berlato, Roberto Carbone, Adam J. Lee, Silvio Ranise',
      title: 'Exploring Architectures for Cryptographic Access Control Enforcement in the Cloud for Fun and Optimization',
      venue: 'in 15th ACM ASIA Conference on Computer and Communications Security (ASIACCS 2020)',
      links: [pdf({ url: 'publications/ASIACCS2020.pdf' }), doi({ url: 'https://doi.org/10.1145/3320269.3384767' }), acm({ url: 'https://dl.acm.org/doi/10.1145/3320269.3384767' })],
      selected: false,
    },
    {
      authors: 'Stefano Berlato, Mariano Ceccato',
      title: 'A Large-Scale Study on the Adoption of Anti-Debugging and Anti-Tampering Protections in Android Apps',
      venue: 'in Journal of Information Security and Applications (JISA), Issue number 52',
      links: [pdf({ url: 'publications/JISA2020.pdf' }), doi({ url: 'https://doi.org/10.1016/j.jisa.2020.102463' }), elsevier({ url: 'https://www.sciencedirect.com/science/article/abs/pii/S2214212619305976?via%3Dihub' })],
      selected: false,
    },

    
  ],
} as const satisfies ReadonlyDeep<PublicationsSection>;

export default publicationsSectionData;

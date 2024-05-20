import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { scholar, scopus, orcid, github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
    showSelectedOnly: false,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Stefano Berlato',
  role: 'Computer Scientist, PhD',
  details: [
    //{ label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
    { label: 'Email', value: 'sb.berlatostefano@gmail.com', url: 'mailto:sb.berlatostefano@gmail.com' },
    //{ label: 'From', value: 'Veneto, Italy' },
    //{ label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    //{ label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'sb.berlatostefano@gmail.com' },
    { label: 'LinkedIn', value: '/in/berlatostefano', url: 'https://www.linkedin.com/in/berlatostefano/', fullRow: true },
    { label: 'GitHub', value: '/StefanoBerlato', url: 'https://github.com/StefanoBerlato' },
    { label: 'Website', value: 'stefanoberlato.it', url: 'https://stefanoberlato.it/' },
    { label: 'Scopus', value: '57215196706', url: 'https://www.scopus.com/authid/detail.uri?authorId=57215196706' },
    { label: 'ORCiD', value: '0000-0002-1700-672X', url: 'https://orcid.org/0000-0002-1700-672X'},
  ],
  description:
    'Researcher, De Cifris member.\n Keen on cloud security and applied cryptography.\n Football coach, KH fan, D&D master.\n',
  tags: [{ name: 'Researcher\@FBK', url: 'https://www.fbk.eu/en/' }, { name: 'Teaching Assistant\@UniTN', url: 'https://www.unitn.it/' }, { name: 'Football Coach\@PGS Concordia', url: 'http://www.pgsconcordia.net/' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Stefano_Berlato.pdf',
  },
  links: [scholar({ url: 'https://scholar.google.com/citations?user=cMgQ9_cAAAAJ' }), github({ url: 'https://github.com/StefanoBerlato' }), linkedin({ url: 'https://www.linkedin.com/in/berlatostefano/' }), scopus({ url: 'https://www.scopus.com/authid/detail.uri?authorId=57215196706' }), orcid({ url: 'https://orcid.org/0000-0002-1700-672X' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

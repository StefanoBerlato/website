import type { ServiceSection } from '@/types/sections/service-section.types';
import type { ReadonlyDeep } from 'type-fest';

const serviceSectionData = {
  config: {
    title: 'Editorial Work and Community Service',
    slug: 'service',
    icon: 'material-symbols:rate-review-outline',
    visible: true,
    showSelectedOnly: false,
  },
  service: [
    {
      year: '2025',
      reviews: 'Reviewer for: IEEE - T-ITS · ESORICS'
    },
    {
      year: '2024',
      reviews: 'Reviewer for: IEEE - TIFS, T-ITS · ICIN · WWW · ITASEC · DBSec · ICFEM',
      organizing: 'Organizing Committee member of the <a href="https://aleph.fbk.eu/events/TAC2024/">Topics in Applied Cryptography</a> (TAC) workshop'
    },
    {
      year: '2023',
      reviews: 'Reviewer for: EURASIP - JIS · DBSec · ITASEC · SECRYPT · CODASPY · SACMAT · ICISS · FPS',
      organizing: undefined
    },
    {
      year: '2022',
      reviews: 'Reviewer for: CODASPY · SECRYPT · DBSec · FedCSIS · ICISSP · FPS',
      organizing: undefined
    },
    {
      year: '2021',
      reviews: 'Reviewer for: Elsevier - JISA · SECRYPT · DPM · SACMAT · ITASEC · DBSec · FPS',
      organizing: undefined
    },
    {
      year: '2020',
      reviews: 'Reviewer for: SECRYPT · FPS · ICISS · DPM · DBSec · SACMAT',
      organizing: undefined
    },
    {
      year: '2019',
      reviews: 'Reviewer for: ICISS',
      organizing: undefined
    },
  ],
} as const satisfies ReadonlyDeep<ServiceSection>;

export default serviceSectionData;

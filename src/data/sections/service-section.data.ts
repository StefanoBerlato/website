import type { ServiceSection } from '@/types/sections/service-section.types';
import type { ReadonlyDeep } from 'type-fest';

const serviceSectionData = {
  config: {
    title: 'Editorial Work and Community Service',
    slug: 'service',
    icon: 'material-symbols:rate-review-outline',
    visible: true,
  },
  service: [
    {
      year: '2024',
      reviews: 'Reviewer for: IEEE - TIFS · ICIN · WWW · ITASEC · DBSec',
    },
    {
      year: '2023',
      reviews: 'Reviewer for: EURASIP - JIS · DBSec · ITASEC · SECRYPT · CODASPY · SACMAT · ICISS · FPS',
    },
    {
      year: '2022',
      reviews: 'Reviewer for: CODASPY · SECRYPT · DBSec · FedCSIS · ICISSP · FPS',
    },
    {
      year: '2021',
      reviews: 'Reviewer for: Elsevier - JISA · SECRYPT · DPM · SACMAT · ITASEC · DBSec · FPS',
    },
    {
      year: '2020',
      reviews: 'Reviewer for: SECRYPT · FPS · ICISS · DPM · DBSec · SACMAT',
    },
    {
      year: '2019',
      reviews: 'Reviewer for: ICISS',
    },
  ],
} as const satisfies ReadonlyDeep<ServiceSection>;

export default serviceSectionData;

import type { ReviewsSection } from '@/types/sections/reviews-section.types';
import type { ReadonlyDeep } from 'type-fest';

const reviewsSectionData = {
  config: {
    title: 'Reviewer Activity',
    slug: 'reviews',
    icon: 'material-symbols:rate-review-outline',
    visible: true,
  },
  reviews: [
    {
      year: '2024',
      venues: 'IEEE - TIFS · ICIN · WWW · ITASEC',
    },
    {
      year: '2023',
      venues: 'EURASIP - JIS · DBSec · ITASEC · SECRYPT · CODASPY · SACMAT · ICISS · FPS',
    },
    {
      year: '2022',
      venues: 'CODASPY · SECRYPT · DBSec · FedCSIS · ICISSP · FPS',
    },
    {
      year: '2021',
      venues: 'Elsevier - JISA · SECRYPT · DPM · SACMAT · ITASEC · DBSec · FPS',
    },
    {
      year: '2020',
      venues: 'SECRYPT · FPS · ICISS · DPM · DBSec · SACMAT',
    },
    {
      year: '2019',
      venues: 'ICISS',
    },
  ],
} as const satisfies ReadonlyDeep<ReviewsSection>;

export default reviewsSectionData;

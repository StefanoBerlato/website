import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Stefano Berlato - Computer Scientist, PhD',
    description:
      'Researcher\@FBK, De Cifris member | Keen on cloud security and applied cryptography | Football coach, KH fan, D&D master.',
    faviconPath: '/src/assets/my-image.jpg',
  },
  pdf: {
    footer:
      ''
      //'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;

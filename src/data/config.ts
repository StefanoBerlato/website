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
      'Researcher\@FBK, De Cifris member | Keen on cloud security and applied cryptography | Football coach, KH fan, Game Master.',
    faviconPath: '/src/assets/my-image.jpg',
  },
  pdf: {
    footer:
      'I hereby give consent to process my data for the purposes of the recruitment process, in accordance with the Regulation of the European Parliament 679/2016, regarding the protection of natural persons and the free movement of such data.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;


import { format } from 'date-fns';
import type { DateRange } from '@/types/shared';
import config from '@/data/config';

const { locale, dateFormat, translations } = config.i18n;

const formatDateRange = ([from, to]: DateRange): string =>
  (to ? 
    from.toString() === to.toString() ?
      format(from, dateFormat, { locale })
      :
      format(from, dateFormat, { locale }).concat(' - ', format(to, dateFormat, { locale })) 
    :
    format(from, dateFormat, { locale }).concat(' - ', translations.now));

export default formatDateRange;

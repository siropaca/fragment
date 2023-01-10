import { format as _format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import enUS from 'date-fns/locale/en-US';
import ja from 'date-fns/locale/ja';

export {
  isToday,
  isAfter,
  isBefore,
  isYesterday,
  parse,
  parseISO,
  formatISO,
  startOfDay,
} from 'date-fns';

type Locale = 'ja' | 'en';

export const format = (date: Date, fmt = 'yyyy/M/d HH:mm', locale: Locale = 'ja'): string => {
  return _format(date, fmt, { locale: locale === 'ja' ? ja : enUS });
};

export const formatDateEn = (date: Date, fmt = 'E LLL d, yyyy'): string => {
  return format(date, fmt, 'en');
};

export const formatDateJa = (date: Date): string => {
  return format(date, 'yyyy/M/d');
};

export const formatTime = (date: Date): string => {
  return format(date, 'HH:mm');
};

export const utcToJstTime = (utcDate: Date): Date => {
  return utcToZonedTime(utcDate, 'Asia/Tokyo');
};

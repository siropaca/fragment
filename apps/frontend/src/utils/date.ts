import { format as _format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
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

export const format = (date: Date, format = 'yyyy/M/d HH:mm'): string => {
  return _format(date, format, { locale: ja });
};

export const formatDate = (date: Date): string => {
  return format(date, 'yyyy/M/d');
};

export const formatTime = (date: Date): string => {
  return format(date, 'HH:mm');
};

export const utcToJstTime = (utcDate: Date): Date => {
  return utcToZonedTime(utcDate, 'Asia/Tokyo');
};

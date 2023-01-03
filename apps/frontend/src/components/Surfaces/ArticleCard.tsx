import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';

import { HeroColor } from '@/gql/graphql';
import { URL } from '@/lib/router';
import { formatDate, utcToJstTime } from '@/utils/date';
import { countText, hasJa } from '@/utils/text';

interface Props {
  id: string;
  title: string;
  description?: string | undefined | null;
  publishedAt?: string;
  heroText?: string | undefined | null;
  heroColor: HeroColor;
  articleNodes: {
    id: string;
  }[];
}

export const ArticleCard = (props: Props): JSX.Element => {
  const COLORS: Record<HeroColor, string> = {
    black: 'bg-gradient-to-br from-gray-900 to-gray-600 bg-gradient-to-r',
  };

  return (
    <article className='flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl'>
      <Link
        href={URL.articleDetail(props.id)}
        className='h-full'
      >
        <div
          className={clsx(
            'relative flex h-40 shrink-0 items-center justify-center overflow-hidden',
            COLORS[props.heroColor],
          )}
        >
          {/*<img*/}
          {/*  className='absolute inset-0 object-cover'*/}
          {/*  src='/heros/1.png'*/}
          {/*  alt='#'*/}
          {/*/>*/}

          <span
            className={clsx(
              'text-center indent-1 font-semibold tracking-widest text-white opacity-90',
              hasJa(props.heroText) && countText(props.heroText) > 6 ? 'text-2xl' : 'text-3xl',
            )}
            style={{ textShadow: '1px 1px 4px rgb(0 0 0 / 20%)' }}
          >
            {props.heroText}
          </span>
        </div>

        <div className='h-full bg-white p-4 dark:bg-zinc-800'>
          <div className='text-lg font-semibold line-clamp-2'>{props.title}</div>

          {props.description && (
            <div className='mt-1 text-gray-500 line-clamp-2 dark:text-gray-400'>
              {props.description}
            </div>
          )}

          <div className='mt-3 text-sm tracking-widest text-gray-400 dark:text-gray-500'>
            <span>{formatDate(utcToJstTime(new Date(props.publishedAt!)))}</span>

            <span>
              <FontAwesomeIcon
                icon={faMessage}
                className='relative ml-3 mr-1.5'
                size='sm'
                style={{ top: '1px' }}
              />
              {props.articleNodes.length}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

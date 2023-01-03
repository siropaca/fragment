import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';

import { URL } from '@/lib/router';
import { formatDate, utcToJstTime } from '@/utils/date';

interface Props {
  id: string;
  title: string;
  description?: string | null;
  publishedAt?: string;
  articleNodes: {
    id: string;
  }[];
}

export const ArticleCard = (props: Props): JSX.Element => {
  const GRADATIONS = [
    'bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500',
    'bg-gradient-to-tr from-green-200 to-green-500',
    'bg-gradient-to-tr from-blue-100 via-blue-300 to-blue-500',
    'bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400',
    'bg-gradient-to-tr from-indigo-300 to-purple-400',
    'bg-gradient-to-tr from-yellow-600 to-red-600',
    'bg-gradient-to-tr from-pink-400 to-pink-600',
  ];

  const random = Math.floor(Math.random() * GRADATIONS.length);

  return (
    <article className='flex flex-col overflow-hidden rounded-lg bg-white shadow-lg'>
      <Link
        href={URL.articleDetail(props.id)}
        className='h-full'
      >
        <div
          className={clsx(
            'relative flex h-40 shrink-0 items-center justify-center',
            GRADATIONS[random],
          )}
        >
          <span
            className='text-3xl font-semibold tracking-widest text-white opacity-95'
            style={{ textShadow: '1px 1px 4px rgb(0 0 0 / 20%)' }}
          >
            Next.js
          </span>

          <span></span>
          {/*<img*/}
          {/*  className='h-full w-full object-cover'*/}
          {/*  src='/heros/1.png'*/}
          {/*  alt='#'*/}
          {/*/>*/}
        </div>

        <div className='p-4'>
          <div className='text-lg font-semibold line-clamp-2'>{props.title}</div>

          {props.description && (
            <div className='mt-1 text-gray-500 line-clamp-2'>{props.description}</div>
          )}

          <div className='mt-3 text-sm tracking-widest text-gray-400'>
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

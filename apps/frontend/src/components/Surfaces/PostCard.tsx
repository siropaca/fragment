import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';

import { PagePath } from '@/lib/router';
import { formatDate, utcToJstTime } from '@/utils/date';
import { countText, hasJa } from '@/utils/text';

interface Props {
  id: string;
  title: string;
  description?: string | undefined | null;
  publishedAt?: string;
  postType: string;
  heroImage: string;
  heroText?: string | undefined | null;
  postNodes: {
    id: string;
  }[];
}

export const PostCard = (props: Props): JSX.Element => {
  return (
    <article className='flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl'>
      <Link
        href={PagePath.blogDetail(props.id)}
        className='h-full'
      >
        {/* ヒーロー画像 */}
        <div className='relative flex h-40 shrink-0 items-center justify-center overflow-hidden'>
          <span className='absolute top-2.5 left-2.5 z-10 rounded-lg bg-gray-900/40 px-2.5 py-1 text-xs text-white'>
            {props.postType}
          </span>

          <img
            className='absolute inset-0 m-auto object-cover'
            src={`/heros/${props.heroImage}.png`}
            alt='#'
          />

          <span
            className={clsx(
              'text-center indent-1 font-semibold tracking-widest text-white opacity-90',
              hasJa(props.heroText) && countText(props.heroText) > 6 ? 'text-2xl' : 'text-3xl',
            )}
            style={{ textShadow: '1px 1px 4px rgb(0 0 0 / 25%)' }}
          >
            {props.heroText}
          </span>
        </div>

        {/* 記事情報 */}
        <div className='h-full bg-white p-4 dark:bg-zinc-800'>
          <div className='text-lg font-semibold line-clamp-2'>{props.title}</div>

          {props.description && (
            <div className='mt-1 text-gray-500 line-clamp-2 dark:text-gray-400'>
              {props.description}
            </div>
          )}

          <div className='mt-3 text-sm text-gray-400 dark:text-gray-500'>
            <time className='tracking-widest'>
              {formatDate(utcToJstTime(new Date(props.publishedAt!)))}
            </time>

            <span>
              <FontAwesomeIcon
                icon={faMessage}
                className='relative ml-3 mr-1.5'
                size='sm'
                style={{ top: '1px' }}
              />
              {props.postNodes.length}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

import clsx from 'clsx';
import Link from 'next/link';

import { Tag } from '@/gql/graphql';
import { URL } from '@/lib/router';

interface Props {
  id: string;
  title: string;
  tags: Array<Tag>;
  description?: string | null;
}

export const ArticleCard = (props: Props): JSX.Element => {
  const GRADATIONS = [
    'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
    'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400',
    'bg-gradient-to-r from-red-200 via-red-300 to-yellow-200',
    'bg-gradient-to-r from-yellow-200 via-green-200 to-green-500',
    'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600',
    'bg-gradient-to-r from-green-200 via-green-300 to-blue-500',
    'bg-gradient-to-r from-green-200 via-green-400 to-purple-700',
    'bg-gradient-to-r from-red-200 to-red-600',
    'bg-gradient-to-r from-indigo-300 to-purple-400',
    'bg-gradient-to-r from-green-200 to-green-500',
  ];

  const random = Math.floor(Math.random() * GRADATIONS.length);

  return (
    <article className='flex flex-col overflow-hidden rounded-lg bg-white shadow-lg'>
      <Link href={URL.articleDetail(props.id)}>
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
          {/*  className='h-48 w-full object-cover'*/}
          {/*  src='/heros/1.png'*/}
          {/*  alt='#'*/}
          {/*/>*/}
        </div>

        <div className='p-4'>
          <div className='text-lg font-semibold'>{props.title}</div>

          <div className='mt-1 text-sm text-gray-500'>{props.description}</div>

          <div className='mt-2.5 flex gap-4 text-sm font-medium text-indigo-600'>
            {props.tags.map((tag) => {
              return (
                <Link
                  key={tag}
                  href={URL.tagsResults(tag)}
                  className='hover:underline'
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </Link>
    </article>
  );
};

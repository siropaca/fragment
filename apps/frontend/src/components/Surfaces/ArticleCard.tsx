import Link from 'next/link';

import { Tag } from '@/gql/graphql';
import { URL } from '@/lib/router';

interface Props {
  id: string;
  title: string;
  tags: Array<Tag>;
  description?: string | null;
  publishedBy?: { id: string; name: string; picture?: string | null } | null;
}

export const ArticleCard = (props: Props): JSX.Element => {
  return (
    <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
      <div className='shrink-0'>
        <img
          className='h-48 w-full object-cover'
          src='https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
          alt=''
        />
      </div>

      <div className='flex flex-1 flex-col justify-between bg-white p-6'>
        <div className='flex-1'>
          <p className='flex gap-4 text-sm font-medium text-indigo-600'>
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
          </p>

          <Link
            href={URL.articleDetail(props.id)}
            className='mt-2 block'
          >
            <p className='text-xl font-semibold text-gray-900'>{props.title}</p>
            <p className='mt-3 text-base text-gray-500'>{props.description}</p>
          </Link>
        </div>

        <div className='mt-6 flex items-center'>
          <div className='shrink-0'>
            <a href={'#'}>
              <span className='sr-only'>{props.publishedBy?.name}</span>
              <img
                className='h-10 w-10 rounded-full'
                src={props.publishedBy?.picture!}
                alt={props.publishedBy?.name}
              />
            </a>
          </div>

          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900'>
              <a
                href={'#'}
                className='hover:underline'
              >
                {props.publishedBy?.name}
              </a>
            </p>

            <div className='flex space-x-1 text-sm text-gray-500'>
              <time dateTime={'2020-03-16'}>{'Mar 16, 2020'}</time>
              <span>&middot;</span>
              <span>{'6 min'} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

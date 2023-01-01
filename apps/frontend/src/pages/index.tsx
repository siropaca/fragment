import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import Link from 'next/link';

import { graphql } from '@/gql';
import { URL } from '@/lib/router';

const queryDocument = graphql(`
  query MyQuery {
    articles {
      id
      title
      tags
      description
      publishedBy {
        id
        name
        picture
      }
    }
  }
`);

const Index: NextPage = () => {
  const { loading, error, data } = useQuery(queryDocument);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div className='relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='absolute inset-0'>
        <div className='h-1/3 bg-white sm:h-2/3' />
      </div>

      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            From the blog
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus
            atque, ducimus sed.
          </p>
        </div>

        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
          {data!.articles.map((article) => (
            <div
              key={article.title}
              className='flex flex-col overflow-hidden rounded-lg shadow-lg'
            >
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
                    {article.tags.map((tag) => {
                      return (
                        <Link
                          key={tag}
                          href={'/'}
                          className='hover:underline'
                        >
                          {tag}
                        </Link>
                      );
                    })}
                  </p>

                  <Link
                    href={URL.articleDetail(article.id)}
                    className='mt-2 block'
                  >
                    <p className='text-xl font-semibold text-gray-900'>{article.title}</p>
                    <p className='mt-3 text-base text-gray-500'>{article.description}</p>
                  </Link>
                </div>

                <div className='mt-6 flex items-center'>
                  <div className='shrink-0'>
                    <a href={'#'}>
                      <span className='sr-only'>{article.publishedBy?.name}</span>
                      <img
                        className='h-10 w-10 rounded-full'
                        src={article.publishedBy?.picture!}
                        alt={article.publishedBy?.name}
                      />
                    </a>
                  </div>

                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a
                        href={'#'}
                        className='hover:underline'
                      >
                        {article.publishedBy?.name}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

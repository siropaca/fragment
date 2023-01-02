import { NextPage } from 'next';
import Link from 'next/link';

import { MainLayout } from '@/components/Layout';
import { URL } from '@/lib/router';

const Custom404: NextPage = () => {
  return (
    <MainLayout>
      <div className='min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl'>404</p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                  Page not found
                </h1>

                <p className='mt-1 text-base text-gray-500'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
            </div>
          </main>

          <div className='mt-14 text-center'>
            <Link
              href={URL.root()}
              className='text-base font-medium text-indigo-600 hover:text-indigo-500'
            >
              Go back home
              <span> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Custom404;

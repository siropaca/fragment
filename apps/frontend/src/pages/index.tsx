import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { BlogCards } from '@/features/blog/components';

const Index: NextPage = () => {
  return (
    <ContentsLayout>
      <section className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
        <BlogCards />
      </section>
    </ContentsLayout>
  );
};

export default Index;

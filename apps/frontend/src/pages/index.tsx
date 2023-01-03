import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { BlogCards } from '@/features/blog/components';
import { URL } from '@/lib/router';

const Index: NextPage = () => {
  return (
    <ContentsLayout
      // TODO: descriptionを設定する
      description=''
      pageType='blog'
      pageUrl={URL.root(true)}
    >
      <section className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
        <BlogCards />
      </section>
    </ContentsLayout>
  );
};

export default Index;

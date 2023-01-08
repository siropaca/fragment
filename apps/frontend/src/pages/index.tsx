import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { BlogCards } from '@/features/blog/components';
import { PagePath } from '@/lib/router';

const IndexPage: NextPage = () => {
  return (
    <ContentsLayout
      // TODO: descriptionを設定する
      description=''
      pageType='blog'
      pageUrl={PagePath.root(true)}
    >
      <div></div>

      <section className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        <BlogCards />
      </section>
    </ContentsLayout>
  );
};

export default IndexPage;

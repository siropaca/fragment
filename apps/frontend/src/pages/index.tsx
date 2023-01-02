import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { BlogCards } from '@/features/blog/components';

const Index: NextPage = () => {
  return (
    <ContentsLayout>
      {/* 記事一覧 */}
      <BlogCards />
    </ContentsLayout>
  );
};

export default Index;

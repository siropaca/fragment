import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { ArticlesCards } from '@/features/articles/components';

const Index: NextPage = () => {
  return (
    <ContentsLayout>
      {/* 記事一覧 */}
      <ArticlesCards />
    </ContentsLayout>
  );
};

export default Index;

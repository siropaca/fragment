import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';

const NewPage: NextPage = () => {
  return (
    <ContentsLayout
      // TODO: descriptionを設定する
      description=''
      pageType='article'
      pageUrl={PagePath.about(true)}
    >
      投稿ページ
    </ContentsLayout>
  );
};

export default NewPage;

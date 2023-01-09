import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { NewBlogForm } from '@/features/blog/components';
import { PagePath } from '@/lib/router';

const NewPage: NextPage = () => {
  return (
    <ContentsLayout
      // TODO: descriptionを設定する
      description=''
      pageType='article'
      pageUrl={PagePath.blogNew(true)}
    >
      <NewBlogForm />
    </ContentsLayout>
  );
};

export default NewPage;

import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';

const AboutPage: NextPage = () => {
  return (
    <ContentsLayout
      // TODO: descriptionを設定する
      description=''
      pageType='article'
      pageUrl={PagePath.about(true)}
    >
      Aboutページ
    </ContentsLayout>
  );
};

export default AboutPage;

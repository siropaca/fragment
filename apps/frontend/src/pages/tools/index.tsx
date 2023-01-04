import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';

const ToolsIndexPage: NextPage = () => {
  return (
    <ContentsLayout
      // TODO: descriptionを設定する
      description=''
      pageType='article'
      pageUrl={PagePath.tools(true)}
    >
      Toolsページ
    </ContentsLayout>
  );
};

export default ToolsIndexPage;

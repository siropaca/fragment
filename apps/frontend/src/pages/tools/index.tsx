import { NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { URL } from '@/lib/router';

const ToolsIndexPage: NextPage = () => {
  return (
    <ContentsLayout
      // TODO: descriptionを設定する
      description=''
      pageType='article'
      pageUrl={URL.tools(true)}
    >
      Toolsページ
    </ContentsLayout>
  );
};

export default ToolsIndexPage;

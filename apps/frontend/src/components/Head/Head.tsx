import { default as NextHead } from 'next/head';

import { PagePath } from '@/lib/router';

export interface HeadProps {
  title?: string;
  description?: string | undefined | null;
  pageUrl: string;
  pageType:
    | 'blog' // ブログのトップページ
    | 'article'; // 記事ページなど、WebサイトのTOP以外のページ
}

export const Head = (props: HeadProps): JSX.Element => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const pageTitle = props.title ? `${props.title} - ${siteName}` : siteName;

  const description = props.description ?? '';

  return (
    <NextHead>
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/favicon-16x16.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/favicon-32x32.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      />

      <title>{pageTitle}</title>

      <meta
        name='description'
        content={description}
      />
      <meta
        property='og:url'
        content={props.pageUrl}
      />
      <meta
        property='og:type'
        content={props.pageType}
      />
      <meta
        property='og:title'
        content={pageTitle}
      />
      <meta
        property='og:description'
        content={description}
      />
      <meta
        property='og:site_name'
        content={siteName}
      />
      <meta
        property='og:image'
        // TODO: ページによって動的に変えれるようにする
        content={PagePath.withOrigin('/ogp.png')}
      />

      {/* TODO: 完成したら削除する */}
      <meta
        name='robots'
        content='noindex'
      />
      <meta
        name='robots'
        content='nofollow'
      />
    </NextHead>
  );
};

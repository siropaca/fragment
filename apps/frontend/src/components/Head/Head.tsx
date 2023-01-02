import { default as NextHead } from 'next/head';

interface Props {
  title?: string;
  description?: string;
}

export const Head = ({ title = '', description = '' }: Props): JSX.Element => {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

  return (
    <NextHead>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <title>{title ? `${title} - ${SITE_NAME}` : SITE_NAME}</title>
      <meta
        name='description'
        content={description}
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

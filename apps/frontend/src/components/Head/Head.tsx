import { default as NextHead } from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
}

export const Head = ({ title = '', description = '' }: HeadProps) => {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

  // title={title ? `${title} | ${SITE_NAME}` : undefined}
  // defaultTitle={SITE_NAME}

  return (
    <NextHead>
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

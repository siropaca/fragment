import { default as NextHead } from 'next/head';

interface Props {
  title?: string;
  description?: string;
}

export const Head = ({ title = '', description = '' }: Props): JSX.Element => {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

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

import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
}

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

  return (
    <Helmet
      title={title ? `${title} | ${SITE_NAME}` : undefined}
      defaultTitle={SITE_NAME}
    >
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
    </Helmet>
  );
};

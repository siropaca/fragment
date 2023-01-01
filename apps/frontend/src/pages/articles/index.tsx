import { GetServerSideProps, NextPage } from 'next';

import { URL } from '@/lib/router';

const ArticlesIndex: NextPage = () => {
  return null;
};

export default ArticlesIndex;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: URL.root(),
      permanent: true,
    },
  };
};

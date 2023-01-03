import { GetServerSideProps, NextPage } from 'next';

import { URL } from '@/lib/router';

const TagIndexPage: NextPage = () => {
  return null;
};

export default TagIndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: URL.root(),
      permanent: true,
    },
  };
};

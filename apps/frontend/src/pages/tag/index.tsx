import { GetServerSideProps, NextPage } from 'next';

import { URL } from '@/lib/router';

const TagIndex: NextPage = () => {
  return null;
};

export default TagIndex;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: URL.root(),
      permanent: true,
    },
  };
};

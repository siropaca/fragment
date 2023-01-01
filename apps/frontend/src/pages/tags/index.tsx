import { GetServerSideProps, NextPage } from 'next';

import { URL } from '@/lib/router';

const TagsIndex: NextPage = () => {
  return null;
};

export default TagsIndex;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: URL.root(),
      permanent: true,
    },
  };
};

import { GetServerSideProps, NextPage } from 'next';

import { PagePath } from '@/lib/router';

const TagIndexPage: NextPage = () => {
  return null;
};

export default TagIndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: PagePath.root(),
      permanent: true,
    },
  };
};

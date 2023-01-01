import { GetServerSideProps, NextPage } from 'next';

const ArticlesIndex: NextPage = () => {
  return null;
};

export default ArticlesIndex;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

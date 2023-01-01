import { GetServerSideProps, NextPage } from 'next';

interface Props {
  articleId: string;
}

const ArticlesDetail: NextPage<Props> = (props) => {
  return <div>{props.articleId}の詳細</div>;
};

export default ArticlesDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

  return {
    props: {
      ...context.params,
    },
  };
};

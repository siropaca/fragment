import { useQuery } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';

import { graphql } from '@/gql';

interface Props {
  articleId: string;
}

const queryDocument = graphql(`
  query Article($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
      id
      title
      description
      tags
      articleNodes {
        id
        boby
      }
    }
  }
`);

const ArticlesDetail: NextPage<Props> = (props) => {
  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      where: {
        id: props.articleId,
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data) return <p>No Data!</p>;

  return (
    <div>
      <h1>{data.article?.title}</h1>
      <h2>{data.article?.description}</h2>
      <h2>{JSON.stringify(data.article?.tags)}</h2>
      <hr />
      {data.article?.articleNodes.map((node) => {
        return <div key={node.id}>{node.boby}</div>;
      })}
    </div>
  );
};

export default ArticlesDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.params,
    },
  };
};
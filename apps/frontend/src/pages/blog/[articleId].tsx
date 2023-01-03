import { useQuery } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { ArticleDetail } from '@/features/blog/components';
import { graphql } from '@/gql';
import { URL } from '@/lib/router';

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
        body
      }
    }
  }
`);

const ArticlesDetailPage: NextPage<Props> = (props) => {
  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      where: {
        id: props.articleId,
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data || !data.article) {
    return <p>Sorry not found.</p>;
  }

  return (
    <ContentsLayout
      title={data.article.title}
      description={data.article.description}
      pageType='article'
      pageUrl={URL.articleDetail(data.article.id, true)}
    >
      <ArticleDetail articleId={props.articleId} />
    </ContentsLayout>
  );
};

export default ArticlesDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.params,
    },
  };
};

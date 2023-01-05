import { useQuery } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { ArticleDetail, HeroImage } from '@/features/blog/components';
import { graphql } from '@/gql';
import { PagePath } from '@/lib/router';

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
      hero
      publishedAt
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
    return <p>Empty data</p>;
  }

  return (
    <ContentsLayout
      title={data.article.title}
      description={data.article.description}
      pageType='article'
      pageUrl={PagePath.articleDetail(data.article.id, true)}
      heroImage={
        <HeroImage
          imageName={data.article.hero}
          title={data.article.title}
          publishedAt={data.article.publishedAt}
          tags={data.article?.tags}
        />
      }
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

import { useQuery } from '@apollo/client';

import { ArticleCard } from '@/components/Surfaces';
import { graphql } from '@/gql';
import { ArticleOrderByInput } from '@/gql/graphql';

const queryDocument = graphql(`
  query Articles($orderBy: ArticleOrderByInput) {
    articles(orderBy: $orderBy) {
      id
      title
      description
      publishedAt
      heroText
      heroColor
      articleNodes {
        id
      }
    }
  }
`);

export const BlogCards = (): JSX.Element => {
  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      orderBy: ArticleOrderByInput.IdDesc,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <>
      {data!.articles.map((article) => (
        <ArticleCard
          key={article.id}
          {...article}
        />
      ))}
    </>
  );
};

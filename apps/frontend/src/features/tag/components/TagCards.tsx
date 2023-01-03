import { useQuery } from '@apollo/client';

import { ArticleCard } from '@/components/Surfaces';
import { graphql } from '@/gql';
import { ArticleOrderByInput, Tag } from '@/gql/graphql';

interface Props {
  tag: Tag;
}

const queryDocument = graphql(`
  query TagArticles($orderBy: ArticleOrderByInput, $where: ArticleWhereInput) {
    articles(orderBy: $orderBy, where: $where) {
      id
      title
      description
      publishedAt
      heroText
      articleNodes {
        id
      }
    }
  }
`);

export const TagCards = (props: Props): JSX.Element => {
  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      orderBy: ArticleOrderByInput.IdDesc,
      where: {
        tags_contains_all: [props.tag],
      },
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

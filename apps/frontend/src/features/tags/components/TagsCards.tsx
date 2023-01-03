import { useQuery } from '@apollo/client';

import { ArticleCard } from '@/components/Surfaces';
import { graphql } from '@/gql';
import { Tag } from '@/gql/graphql';

const queryDocument = graphql(`
  query TagsArticles($where: ArticleWhereInput) {
    articles(where: $where) {
      id
      title
      tags
      description
      publishedAt
      articleNodes {
        id
      }
    }
  }
`);

interface Props {
  tag: Tag;
}

export const TagsCards = (props: Props): JSX.Element => {
  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
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

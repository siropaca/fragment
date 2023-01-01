import { useQuery } from '@apollo/client';

import { ArticleCard } from '@/components/Surfaces';
import { graphql } from '@/gql';

const queryDocument = graphql(`
  query Articles {
    articles {
      id
      title
      tags
      description
      publishedBy {
        id
        name
        picture
      }
    }
  }
`);

export const ArticlesCards = (): JSX.Element => {
  const { loading, error, data } = useQuery(queryDocument);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div className='grid gap-5 lg:grid-cols-3'>
      {data!.articles.map((article) => (
        <ArticleCard
          key={article.id}
          {...article}
        />
      ))}
    </div>
  );
};

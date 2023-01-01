import { useQuery } from '@apollo/client';

import { graphql } from '@/gql';

const queryDocument = graphql(`
  query MyQuery {
    articles {
      id
      title
      body
    }
  }
`);

export default function Web() {
  const { loading, error, data } = useQuery(queryDocument);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div>
      <h1>Web</h1>

      {data!.articles.map((article) => {
        return (
          <div key={article.id}>
            <div>{article.title}</div>
            <div>{article.body}</div>
          </div>
        );
      })}
    </div>
  );
}

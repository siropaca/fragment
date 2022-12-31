import { gql, useQuery } from '@apollo/client';
import { Button } from 'ui';

interface MyQuery {
  articles: {
    id: string;
    title: string;
    body: string;
  }[];
}

export default function Web() {
  const { loading, error, data } = useQuery<MyQuery>(gql`
    query {
      articles {
        id
        title
        body
      }
    }
  `);

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

      <Button />
    </div>
  );
}

import { useQuery } from '@apollo/client';

import { PostCard } from '@/components/Surfaces';
import { graphql } from '@/gql';
import { PostOrderByInput } from '@/gql/graphql';

const query = graphql(`
  query Posts($orderBy: PostOrderByInput) {
    posts(orderBy: $orderBy) {
      id
      title
      description
      publishedAt
      heroImage
      heroText
      postNodes {
        id
      }
    }
  }
`);

export const BlogCards = (): JSX.Element => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      orderBy: PostOrderByInput.IdDesc,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <>
      {data!.posts.map((post) => (
        <PostCard
          key={post.id}
          {...post}
        />
      ))}
    </>
  );
};

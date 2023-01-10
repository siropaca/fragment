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
    fetchPolicy: 'no-cache',
    variables: {
      orderBy: PostOrderByInput.IdDesc,
    },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {JSON.stringify(error)}</div>;

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

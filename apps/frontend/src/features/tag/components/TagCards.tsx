import { useQuery } from '@apollo/client';

import { PostCard } from '@/components/Surfaces';
import { graphql } from '@/gql';
import { PostOrderByInput, Tag } from '@/gql/graphql';

interface Props {
  tag: Tag;
}

const query = graphql(`
  query TagPosts($orderBy: PostOrderByInput, $where: PostWhereInput) {
    posts(orderBy: $orderBy, where: $where) {
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

export const TagCards = (props: Props): JSX.Element => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      orderBy: PostOrderByInput.IdDesc,
      where: {
        tags_contains_all: [props.tag],
      },
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

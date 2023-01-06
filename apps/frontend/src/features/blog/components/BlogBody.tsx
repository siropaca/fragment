import { useQuery } from '@apollo/client';

import { Markdown } from '@/components/DataDisplay/Markdown';
import { BlogFrom, BlogSection } from '@/features/blog/components';
import { graphql } from '@/gql';
import { formatDate } from '@/utils/date';

interface Props {
  postId: string;
}

const query = graphql(`
  query BlogBody($where: PostWhereUniqueInput!) {
    post(where: $where) {
      id
      description
      showDescription
      postNodes {
        id
        publishedAt
        body
      }
    }
  }
`);

export const BlogBody = (props: Props): JSX.Element => {
  const { loading, error, data, refetch } = useQuery(query, {
    variables: {
      where: {
        id: props.postId,
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data || !data.post) {
    return <p>Sorry not found.</p>;
  }

  const handleCompleted = () => {
    refetch();
  };

  return (
    <section>
      {data.post?.description && data.post?.showDescription && (
        <p className='mb-6 leading-loose text-gray-500 dark:text-gray-400'>
          {data.post?.description}
        </p>
      )}

      <article className='flex flex-col gap-6'>
        {data.post?.postNodes.map((node) => {
          return (
            <BlogSection key={node.id}>
              <div className='mb-2 tracking-widest'>{formatDate(new Date(node.publishedAt))}</div>

              <Markdown markdown={node.body} />
            </BlogSection>
          );
        })}

        <BlogSection>
          <BlogFrom
            postId={props.postId}
            onCompleted={handleCompleted}
          />
        </BlogSection>
      </article>
    </section>
  );
};

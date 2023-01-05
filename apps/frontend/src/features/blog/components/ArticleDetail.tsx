import { useQuery } from '@apollo/client';
import clsx from 'clsx';

import { Markdown } from '@/components/DataDisplay/Markdown';
import { graphql } from '@/gql';

interface Props {
  articleId: string;
}

const queryDocument = graphql(`
  query ArticleDetail($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
      id
      description
      showDescription
      articleNodes {
        id
        body
      }
    }
  }
`);

export const ArticleDetail = (props: Props): JSX.Element => {
  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      where: {
        id: props.articleId,
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data || !data.article) {
    return <p>Sorry not found.</p>;
  }

  const hasNode = !!data.article?.articleNodes.length;

  return (
    <section>
      {data.article?.description && data.article?.showDescription && (
        <p className={clsx('leading-loose text-gray-500 dark:text-gray-400', hasNode && 'mb-6')}>
          {data.article?.description}
        </p>
      )}

      {hasNode && (
        <article className='flex flex-col gap-6'>
          {data.article?.articleNodes.map((node) => {
            return (
              <section
                key={node.id}
                className='overflow-hidden rounded-md border border-gray-100 bg-white p-4 text-sm leading-loose dark:border-zinc-800 dark:bg-zinc-800 md:p-5'
              >
                <Markdown markdown={node.body} />
              </section>
            );
          })}
        </article>
      )}
    </section>
  );
};

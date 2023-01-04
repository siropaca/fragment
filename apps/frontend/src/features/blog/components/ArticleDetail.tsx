import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { graphql } from '@/gql';

interface Props {
  articleId: string;
}

const queryDocument = graphql(`
  query ArticleDetail($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
      id
      description
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

  return (
    <section>
      {data.article?.description && (
        <p className='mb-6 text-gray-500 dark:text-gray-400'>{data.article?.description}</p>
      )}

      <article className='flex flex-col gap-4'>
        {data.article?.articleNodes.map((node) => {
          return (
            <div
              key={node.id}
              className='overflow-hidden rounded-md bg-white p-4 dark:bg-zinc-800'
              id='react-markdown'
            >
              <ReactMarkdown
                children={node.body.replace(/\n$/g, '  \n')}
                components={{
                  // eslint-disable-next-line no-unused-vars
                  code({ node, inline, className, children, ...props }) {
                    const matchLang = /language-(\w+)/.exec(className || '');
                    return !inline && matchLang ? (
                      // @ts-ignore
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        language={matchLang[1]}
                        PreTag='div'
                        {...props}
                      />
                    ) : (
                      <code
                        className={className}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};

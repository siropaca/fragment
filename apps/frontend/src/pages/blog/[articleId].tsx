import { useQuery } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

import { ContentsLayout } from '@/components/Layout';
import { ArticleDetail } from '@/features/blog/components';
import { graphql } from '@/gql';
import { URL } from '@/lib/router';
import { formatDate, utcToJstTime } from '@/utils/date';

interface Props {
  articleId: string;
}

const queryDocument = graphql(`
  query Article($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
      id
      title
      description
      tags
      publishedAt
      updatedAt
      articleNodes {
        id
        body
      }
    }
  }
`);

const ArticlesDetailPage: NextPage<Props> = (props) => {
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
    return <p>Empty data</p>;
  }

  const publishedAt = formatDate(utcToJstTime(new Date(data.article.publishedAt!)));
  const updatedAt = formatDate(utcToJstTime(new Date(data.article.updatedAt!)));
  const isUpdated = publishedAt !== updatedAt;

  return (
    <ContentsLayout
      title={data.article.title}
      description={data.article.description}
      pageType='article'
      pageUrl={URL.articleDetail(data.article.id, true)}
      hero={
        <div className='relative h-48 overflow-hidden md:h-56 lg:h-60'>
          <img
            className='absolute inset-0 m-auto object-cover'
            src='/heros/01_Royal_Heath.png'
            alt='#'
          />

          <div
            className='absolute inset-0 m-auto bg-black/10 object-cover'
            style={{ backdropFilter: 'blur(3px)' }}
          ></div>

          <div
            className='absolute inset-x-0 bottom-0 px-4 pb-4 pt-10 text-white md:px-8 md:pb-5 lg:pb-6'
            style={{ background: 'linear-gradient(180deg,transparent 0,rgba(0,0,0,.65))' }}
          >
            <h1 className='mb-1.5 text-xl font-semibold leading-relaxed md:text-2xl'>
              {data.article.title}
            </h1>

            <div className='mb-2 flex gap-4 text-sm md:text-base'>
              <time className='tracking-widest'>公開 {publishedAt}</time>

              {isUpdated && <time className='tracking-widest'>更新 {updatedAt}</time>}
            </div>

            <div className='flex gap-4 text-sm'>
              {data.article?.tags.map((tag) => (
                <Link
                  key={tag}
                  href={URL.tagResult(tag)}
                  className='cursor-pointer hover:opacity-50'
                >
                  # {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ArticleDetail articleId={props.articleId} />
    </ContentsLayout>
  );
};

export default ArticlesDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.params,
    },
  };
};

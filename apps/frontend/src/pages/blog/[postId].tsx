import { useQuery } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { BlogBody, HeroImage } from '@/features/blog/components';
import { graphql } from '@/gql';
import { PagePath } from '@/lib/router';

interface Props {
  postId: string;
}

const query = graphql(`
  query BlogPage($where: PostWhereUniqueInput!) {
    post(where: $where) {
      id
      title
      description
      tags
      heroImage
      heroText
      publishedAt
      postNodes {
        id
        body
      }
    }
  }
`);

const BlogPage: NextPage<Props> = (props) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      where: {
        id: props.postId,
      },
    },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  if (!data || !data.post) {
    return <div>Empty data</div>;
  }

  return (
    <ContentsLayout
      title={data.post.title}
      description={data.post.description}
      pageType='article'
      pageUrl={PagePath.blogDetail(data.post.id, true)}
      heroImage={
        <HeroImage
          heroImage={data.post.heroImage}
          heroText={data.post.heroText}
          title={data.post.title}
          publishedAt={data.post.publishedAt as string}
          tags={data.post?.tags}
        />
      }
    >
      <BlogBody postId={props.postId} />
    </ContentsLayout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.params,
    },
  };
};

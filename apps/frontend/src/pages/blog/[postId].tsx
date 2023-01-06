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

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data || !data.post) {
    return <p>Empty data</p>;
  }

  return (
    <ContentsLayout
      title={data.post.title}
      description={data.post.description}
      pageType='article'
      pageUrl={PagePath.blogDetail(data.post.id, true)}
      heroImage={
        <HeroImage
          imageName={data.post.heroImage}
          title={data.post.title}
          publishedAt={data.post.publishedAt}
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

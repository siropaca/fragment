import { GetServerSideProps, NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { TagsCards } from '@/features/tags/components';
import { Tag } from '@/gql/graphql';
import { URL } from '@/lib/router';

interface Props {
  tag: Tag;
}

const TagsResults: NextPage<Props> = (props) => {
  return (
    <ContentsLayout
      pageType='article'
      pageUrl={URL.tagsResults(props.tag, true)}
    >
      <h2 className='mb-6'>{`"${props.tag}" のタグがついた記事`}</h2>

      <section className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
        <TagsCards tag={props.tag} />
      </section>
    </ContentsLayout>
  );
};

export default TagsResults;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.params,
    },
  };
};

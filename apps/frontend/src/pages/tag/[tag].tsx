import { GetServerSideProps, NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { TagCards } from '@/features/tag/components';
import { Tag } from '@/gql/graphql';
import { URL } from '@/lib/router';

interface Props {
  tag: Tag;
}

const TagResults: NextPage<Props> = (props) => {
  const title = `"${props.tag}" のタグがついた記事`;

  return (
    <ContentsLayout
      title={props.tag}
      description={title}
      pageType='article'
      pageUrl={URL.tagResults(props.tag, true)}
    >
      <h2 className='mb-6'>{title}</h2>

      <section className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
        <TagCards tag={props.tag} />
      </section>
    </ContentsLayout>
  );
};

export default TagResults;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.params,
    },
  };
};

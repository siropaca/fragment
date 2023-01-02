import { GetServerSideProps, NextPage } from 'next';

import { ContentsLayout } from '@/components/Layout';
import { TagsCards } from '@/features/tags/components';
import { Tag } from '@/gql/graphql';

interface Props {
  tag: Tag;
}

const TagsResults: NextPage<Props> = (props) => {
  return (
    <ContentsLayout>
      <div>{`"${props.tag}" のタグがついた記事`}</div>

      {/* 記事一覧 */}
      <TagsCards tag={props.tag} />
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

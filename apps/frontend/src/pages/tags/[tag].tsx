import { GetServerSideProps, NextPage } from 'next';

import { TagsCards } from '@/features/tags/components';
import { Tag } from '@/gql/graphql';

interface Props {
  tag: Tag;
}

const TagsResults: NextPage<Props> = (props) => {
  return (
    <div className='relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='absolute inset-0'>
        <div className='h-1/3 bg-white sm:h-2/3' />
      </div>

      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {`"${props.tag}" のタグがついた記事`}
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus
            atque, ducimus sed.
          </p>
        </div>

        {/* 記事一覧 */}
        <div className='mx-auto mt-12 max-w-lg lg:max-w-none'>
          <TagsCards tag={props.tag} />
        </div>
      </div>
    </div>
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

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Textarea } from '@/components/Inputs';
import { BlogSection } from '@/features/blog/components';
import { graphql } from '@/gql';
import { HeroImage } from '@/gql/graphql';
import { PagePath } from '@/lib/router';

const createPostQuery = graphql(`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      id
    }
  }
`);

const publishPostQuery = graphql(`
  mutation PublishPost($where: PostWhereUniqueInput!) {
    publishPost(where: $where) {
      id
    }
  }
`);

interface NewPostField {
  title: string;
}

export const NewBlogForm = (): JSX.Element => {
  const router = useRouter();

  const [commitCreateMutation, { loading: createPostLoading }] = useMutation(createPostQuery);
  const [commitPublishMutation, { loading: publishPostLoading }] = useMutation(publishPostQuery);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<NewPostField>();

  const publishPost = (postId: string) => {
    commitPublishMutation({
      variables: {
        where: {
          id: postId,
        },
      },
      onCompleted: () => {
        router.replace(PagePath.blogDetail(postId));
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const onSubmit = (formData: NewPostField) => {
    const title = formData.title.replace(/\n/g, ' ');

    commitCreateMutation({
      variables: {
        data: {
          title,
          description: '',
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          heroImage: HeroImage.RoyalHeath,
          heroText: '',
          showDescription: true,
          tags: [],
        },
      },
      onCompleted: (data) => {
        publishPost(data.createPost?.id!);
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const loading = createPostLoading || publishPostLoading;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BlogSection>
        <Textarea
          placeholder='タイトルを追加...'
          className='h-32'
          {...register('title')}
        />

        {errors.title?.message && <div>{JSON.stringify(errors.title.message)}</div>}

        <div className='mt-4 text-right'>
          <button disabled={!isDirty || loading}>{loading ? '作成中...' : '作成'}</button>
        </div>
      </BlogSection>
    </form>
  );
};

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
  description: string;
  heroImage: string;
  heroText: string;
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
    commitCreateMutation({
      variables: {
        data: {
          title: formData.title.replace(/\n/g, ' '),
          description: formData.description,
          showDescription: !!formData.description,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          heroImage: formData.heroImage as HeroImage,
          heroText: formData.heroText,
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

        <Textarea
          placeholder='説明を追加...'
          className='h-32'
          {...register('description')}
        />

        <select
          {...register('heroImage')}
          className='bg-transparent'
        >
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
          {Object.entries(HeroImage).map(([key, value]) => {
            return (
              <option
                key={key}
                value={value}
              >
                {value}
              </option>
            );
          })}
        </select>

        <div className='mt-5'>
          <input
            type='text'
            placeholder='heroText'
            className='w-full bg-transparent'
            {...register('heroText')}
          />
        </div>

        {errors.title?.message && <div>{JSON.stringify(errors.title.message)}</div>}

        <div className='mt-4 text-right'>
          <button disabled={!isDirty || loading}>{loading ? '作成中...' : '作成'}</button>
        </div>
      </BlogSection>
    </form>
  );
};

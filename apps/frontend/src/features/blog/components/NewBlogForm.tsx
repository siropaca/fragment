import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Input, Select, Textarea } from '@/components/Inputs';
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
        <div>
          <Textarea
            placeholder='タイトルを追加...'
            className='h-32'
            {...register('title')}
          />
        </div>

        <div className='mt-4'>
          <Textarea
            placeholder='説明を追加...'
            className='h-32'
            {...register('description')}
          />
        </div>

        <div className='mt-4'>
          <Select
            {...register('heroImage')}
            options={Object.entries(HeroImage).map(([key, value], index) => {
              return {
                label: `${++index}. ${key}`,
                value,
              };
            })}
          ></Select>
        </div>

        <div className='mt-4'>
          <Link
            href={PagePath.heroes()}
            target='_blank'
            rel='noreferrer'
          >
            Sampleはこちら→
          </Link>
        </div>

        <div className='mt-5'>
          <Input
            type='text'
            placeholder='heroText'
            className='w-full'
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

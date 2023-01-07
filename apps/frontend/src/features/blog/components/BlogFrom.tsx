import { useMutation } from '@apollo/client';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Markdown } from '@/components/DataDisplay/Markdown';
import { graphql } from '@/gql';

interface Props {
  postId: string;
  onCompleted: Function;
}

interface BlogFromField {
  text: string;
}

const createPostNodeQuery = graphql(`
  mutation BlogFrom_createPostNodeMutation($data: PostNodeCreateInput!) {
    createPostNode(data: $data) {
      id
    }
  }
`);

const publishPostNodeQuery = graphql(`
  mutation BlogFrom_publishPostNodeMutation($where: PostNodeWhereUniqueInput!) {
    publishPostNode(where: $where) {
      id
    }
  }
`);

export const BlogFrom = ({ postId, onCompleted }: Props): JSX.Element => {
  const [commitCreateMutation, { loading: createLoading }] = useMutation(createPostNodeQuery);
  const [commitPublishMutation, { loading: publishLoading }] = useMutation(publishPostNodeQuery);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<BlogFromField>();

  const publishPostNodeId = (postNodeId: string) => {
    commitPublishMutation({
      variables: {
        where: {
          id: postNodeId,
        },
      },
      onCompleted: () => {
        setValue('text', '');

        if (onCompleted) {
          onCompleted();
        }
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const onSubmit = (formData: BlogFromField) => {
    commitCreateMutation({
      variables: {
        data: {
          body: formData.text,
          post: {
            connect: {
              id: postId,
            },
          },
        },
      },
      onCompleted: (data) => {
        publishPostNodeId(data.createPostNode?.id!);
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const loading = createLoading || publishLoading;

  const [isEditor, setIsEditor] = useState(true);
  const [isPreview, setIsPreview] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4 flex gap-x-5'>
        <button
          type='button'
          className={clsx(isEditor && 'text-blue-500')}
          onClick={() => {
            setIsEditor(true);
            setIsPreview(false);
          }}
        >
          エディタ
        </button>

        <button
          type='button'
          className={clsx(isPreview && 'text-blue-500')}
          onClick={() => {
            setIsPreview(true);
            setIsEditor(false);
          }}
        >
          プレビュー
        </button>
      </div>

      <div className='flex gap-x-5'>
        <textarea
          className={clsx(
            'h-64 w-full flex-1 shrink-0 bg-transparent px-4 py-2',
            !isEditor && 'hidden',
          )}
          {...register('text')}
        />

        <Markdown
          markdown={watch().text ?? ''}
          className={clsx('flex-1 shrink-0', !isPreview && 'hidden')}
        />
      </div>

      {errors.text?.message && <div>{JSON.stringify(errors.text.message)}</div>}

      <div className='px-4 pt-3 text-right'>
        <button disabled={!isDirty || loading}>{loading ? '登録中...' : '保存'}</button>
      </div>
    </form>
  );
};

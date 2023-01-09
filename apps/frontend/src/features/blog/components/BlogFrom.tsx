import { useMutation } from '@apollo/client';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Markdown } from '@/components/DataDisplay/Markdown';
import { Button, Textarea } from '@/components/Inputs';
import { graphql } from '@/gql';

interface Props {
  postId: string;
  onCompleted(): void;
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

  const publishPostNode = (postNodeId: string | undefined) => {
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
        publishPostNode(data.createPostNode?.id);
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
      <div className='mb-4 flex gap-x-2'>
        <Button
          variant={isEditor ? 'contained' : 'text'}
          size='small'
          onClick={() => {
            setIsEditor(true);
            setIsPreview(false);
          }}
        >
          エディタ
        </Button>

        <Button
          variant={isPreview ? 'contained' : 'text'}
          size='small'
          onClick={() => {
            setIsPreview(true);
            setIsEditor(false);
          }}
        >
          プレビュー
        </Button>
      </div>

      <div>
        <Textarea
          placeholder='テキストを追加...'
          className={clsx('h-64', !isEditor && 'hidden')}
          {...register('text')}
        />

        <Markdown
          markdown={watch().text ?? ''}
          className={clsx('flex-1 shrink-0', !isPreview && 'hidden')}
        />
      </div>

      {errors.text?.message && <div>{JSON.stringify(errors.text.message)}</div>}

      <div className='mt-3 text-right'>
        <Button
          variant='contained'
          size='small'
          type='submit'
          disabled={!isDirty || loading}
        >
          {loading ? '登録中...' : '保存'}
        </Button>
      </div>
    </form>
  );
};

import { useMutation } from '@apollo/client';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Markdown } from '@/components/DataDisplay/Markdown';
import { Button, Textarea } from '@/components/Inputs';
import { graphql } from '@/gql';

interface Props {
  postId: string;
  postNodeId?: string;
  defaultValue?: string;
  className?: string;
  onCompleted: () => void;
  onCancelClick?: () => void;
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

const updatePostNodeQuery = graphql(`
  mutation BlogFrom_UpdatePostNodeMutation(
    $where: PostNodeWhereUniqueInput!
    $data: PostNodeUpdateInput!
  ) {
    updatePostNode(where: $where, data: $data) {
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

export const BlogFrom = ({
  postId,
  postNodeId,
  defaultValue = '',
  className,
  onCompleted,
  onCancelClick,
}: Props): JSX.Element => {
  const [commitCreateMutation, { loading: createLoading }] = useMutation(createPostNodeQuery);
  const [commitUpdateMutation, { loading: updateLoading }] = useMutation(updatePostNodeQuery);
  const [commitPublishMutation, { loading: publishLoading }] = useMutation(publishPostNodeQuery);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<BlogFromField>({
    defaultValues: {
      text: defaultValue,
    },
  });

  const loading = createLoading || updateLoading || publishLoading;

  const [isEditor, setIsEditor] = useState(true);
  const [isPreview, setIsPreview] = useState(false);

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
    // Update
    if (postNodeId) {
      commitUpdateMutation({
        variables: {
          where: {
            id: postNodeId,
          },
          data: {
            body: formData.text,
          },
        },
        onCompleted: (data) => {
          publishPostNode(data.updatePostNode?.id);
        },
        onError: (error) => {
          console.error(error);
        },
      });
    }
    // Create
    else {
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
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
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
          disabled={!watch().text}
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
          className={clsx('h-64', !isEditor && 'hidden')}
          {...register('text')}
        />

        <Markdown
          markdown={watch().text ?? ''}
          className={clsx('flex-1 shrink-0', !isPreview && 'hidden')}
        />
      </div>

      {errors.text?.message && <div>{JSON.stringify(errors.text.message)}</div>}

      <div className='mt-5 text-right'>
        {postNodeId && (
          <Button
            variant='outlined'
            size='small'
            type='button'
            disabled={loading}
            onClick={onCancelClick}
            className='mr-4'
          >
            キャンセル
          </Button>
        )}

        <Button
          variant='contained'
          size='small'
          type='submit'
          disabled={!isDirty || loading}
          loading={loading}
        >
          保存
        </Button>
      </div>
    </form>
  );
};

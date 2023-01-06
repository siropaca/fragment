import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className='h-64 w-full bg-transparent px-4 py-2'
        {...register('text')}
      />

      {errors.text?.message && <div>{JSON.stringify(errors.text.message)}</div>}

      <div className='px-4 pt-2 text-right'>
        <button disabled={!isDirty || loading}>{loading ? '登録中...' : '保存'}</button>
      </div>
    </form>
  );
};

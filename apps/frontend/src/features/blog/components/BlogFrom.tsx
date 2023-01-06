import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';

import { graphql } from '@/gql';

interface Props {
  articleId: string;
  onCompleted: Function;
}

interface BlogFromField {
  text: string;
}

const createArticleNodeQuery = graphql(`
  mutation BlogFrom_createArticleNodeMutation($data: ArticleNodeCreateInput!) {
    createArticleNode(data: $data) {
      id
    }
  }
`);

const publishArticleNodeQuery = graphql(`
  mutation BlogFrom_publishArticleNodeMutation($where: ArticleNodeWhereUniqueInput!) {
    publishArticleNode(where: $where) {
      id
    }
  }
`);

export const BlogFrom = ({ articleId, onCompleted }: Props): JSX.Element => {
  const [commitCreateMutation, { loading: createLoading }] = useMutation(createArticleNodeQuery);
  const [commitPublishMutation, { loading: publishLoading }] = useMutation(publishArticleNodeQuery);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm<BlogFromField>();

  const publishArticleNodeId = (articleNodeId: string) => {
    commitPublishMutation({
      variables: {
        where: {
          id: articleNodeId,
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
          article: {
            connect: {
              id: articleId,
            },
          },
        },
      },
      onCompleted: (data) => {
        publishArticleNodeId(data.createArticleNode?.id!);
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

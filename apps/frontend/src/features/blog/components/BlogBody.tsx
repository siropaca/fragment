import { useMutation, useQuery } from '@apollo/client';
import { faEllipsis, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';

import { DropdownMenu } from '@/components/DataDisplay/DropdownMenu';
import { Markdown } from '@/components/DataDisplay/Markdown';
import { BlogFrom, BlogSection } from '@/features/blog/components';
import { graphql } from '@/gql';
import { formatDateJa } from '@/utils/date';

interface Props {
  postId: string;
}

const getBlogBodyQuery = graphql(`
  query BlogBody($where: PostWhereUniqueInput!, $first: Int) {
    post(where: $where) {
      id
      description
      showDescription
      postNodes(first: $first) {
        id
        publishedAt
        body
      }
    }
  }
`);

const deletePostNodeQuery = graphql(`
  mutation DeletePostNode($where: PostNodeWhereUniqueInput!) {
    deletePostNode(where: $where) {
      id
    }
  }
`);

export const BlogBody = (props: Props): JSX.Element => {
  const [editingNode, setEditingNode] = useState<string | null>(null);

  const { loading, error, data, refetch } = useQuery(getBlogBodyQuery, {
    variables: {
      where: {
        id: props.postId,
      },
      first: 100,
    },
  });

  const [commitDeleteMutation] = useMutation(deletePostNodeQuery);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data || !data.post) {
    return <p>Sorry not found.</p>;
  }

  const handleCompleted = () => {
    setEditingNode(null);
    refetch();
  };

  const handleEditClick = (nodeId: string) => {
    setEditingNode(nodeId);
  };

  const handleDeleteClick = (nodeId: string) => {
    commitDeleteMutation({
      variables: {
        where: {
          id: nodeId,
        },
      },
      onCompleted: () => {
        refetch();

        // TODO: フィードバック追加
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const handleCanClick = () => {
    setEditingNode(null);
  };

  return (
    <section>
      {data.post?.description && data.post?.showDescription && (
        <p className='mb-6 leading-loose text-gray-500 dark:text-gray-400'>
          {data.post?.description}
        </p>
      )}

      <article className='flex flex-col gap-6'>
        {data.post?.postNodes.map((node) => {
          return (
            <BlogSection key={node.id}>
              {/* Header */}
              <div className='-mt-2 mb-4 flex justify-between'>
                <time className='tracking-widest'>
                  {formatDateJa(new Date(node.publishedAt as string))}
                </time>

                <DropdownMenu>
                  <DropdownMenu.Button>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      size='lg'
                    />
                  </DropdownMenu.Button>

                  <DropdownMenu.MenuItem
                    onClick={() => handleEditClick(node.id)}
                    disabled={editingNode === node.id}
                  >
                    <FontAwesomeIcon
                      icon={faPen}
                      size='sm'
                      className='mr-3'
                    />
                    編集
                  </DropdownMenu.MenuItem>

                  <DropdownMenu.MenuItem
                    className='text-red-600'
                    onClick={() => handleDeleteClick(node.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      size='sm'
                      className='mr-3'
                    />
                    削除
                  </DropdownMenu.MenuItem>
                </DropdownMenu>
              </div>

              {/* Body */}
              <Markdown
                markdown={node.body}
                className={clsx(editingNode === node.id && 'hidden')}
              />

              {editingNode === node.id && (
                <BlogFrom
                  postId={props.postId}
                  postNodeId={node.id}
                  defaultValue={node.body}
                  onCompleted={handleCompleted}
                  onCancelClick={handleCanClick}
                />
              )}
            </BlogSection>
          );
        })}

        <BlogSection>
          <BlogFrom
            postId={props.postId}
            onCompleted={handleCompleted}
          />
        </BlogSection>
      </article>
    </section>
  );
};

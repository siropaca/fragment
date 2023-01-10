import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const BlogSection = (props: Props): JSX.Element => {
  return (
    <section className='relative rounded-lg border border-gray-100 bg-white p-4 text-sm leading-loose shadow-sm dark:border-zinc-800 dark:bg-zinc-800 md:p-5'>
      {props.children}
    </section>
  );
};

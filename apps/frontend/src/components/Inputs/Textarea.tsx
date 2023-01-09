import clsx from 'clsx';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ ...textareaProps }: Props, ref) => {
    return (
      <textarea
        ref={ref}
        {...textareaProps}
        className={clsx(
          'w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 leading-normal focus:outline-none dark:border-gray-600',
          textareaProps.className,
        )}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

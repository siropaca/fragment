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
          'block w-full bg-transparent px-4 py-2 leading-normal focus:outline-none',
          textareaProps.className,
        )}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

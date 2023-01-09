import clsx from 'clsx';
import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>(({ ...inputProps }: Props, ref) => {
  return (
    <input
      ref={ref}
      {...inputProps}
      className={clsx(
        'h-10 rounded-lg border border-gray-200 bg-transparent px-3 align-bottom leading-normal focus:outline-none dark:border-gray-600',
        inputProps.className,
      )}
    />
  );
});

Input.displayName = 'Input';

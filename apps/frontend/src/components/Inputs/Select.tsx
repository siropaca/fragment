import clsx from 'clsx';
import React from 'react';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ options, ...selectProps }: Props, ref) => {
    return (
      <select
        ref={ref}
        {...selectProps}
        className={clsx(
          'h-10 cursor-pointer rounded-lg border border-gray-200 bg-transparent px-3 focus:outline-none dark:border-gray-600',
          selectProps.className,
        )}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    );
  },
);

Select.displayName = 'Select';

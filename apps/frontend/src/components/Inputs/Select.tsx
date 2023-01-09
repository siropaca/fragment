import clsx from 'clsx';
import React from 'react';

export type SelectValue = string;

// @ts-ignore
interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: SelectValue }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, value: SelectValue) => void;
}

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ options, onChange, ...selectProps }: Props, ref) => {
    // Override
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectOption = options.find((option) => option.value === event.target.value);

      if (onChange) {
        onChange(event, selectOption!.value);
      }
    };

    return (
      <select
        ref={ref}
        {...selectProps}
        className={clsx(
          'h-10 cursor-pointer rounded-lg border border-gray-200 bg-transparent px-3 focus:outline-none dark:border-gray-600',
          selectProps.className,
        )}
        onChange={handleChange}
      >
        {options.map((option, index) => {
          return (
            <option
              key={index}
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

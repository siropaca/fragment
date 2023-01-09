import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { Select, SelectValue } from '@/components/Inputs';
import { Tag } from '@/gql/graphql';

interface Props {
  value: string[];
  onChange: (value: string[]) => void;
}

export const TagSelector = (props: Props): JSX.Element => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [tags, setTags] = useState<string[]>(props.value);

  const tagOptions = Object.entries(Tag).map(([key, value]) => {
    return {
      label: key,
      value: value,
    };
  });

  const [options, setOptions] = useState(tagOptions);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, value: SelectValue) => {
    if (!value) return;

    const newTags = [...tags, value];
    setTags(newTags);
    updateOptions(newTags);

    setValue('select');

    props.onChange(newTags);
  };

  const handleRemoveClick = (targetTag: string) => {
    const newTags = tags.filter((tag) => tag !== targetTag);
    setTags(newTags);
    updateOptions(newTags);

    props.onChange(newTags);
  };

  const updateOptions = (tags: string[]) => {
    setOptions(tagOptions.filter((option) => !tags.includes(option.value)));
  };

  return (
    <div className='flex items-center gap-4'>
      <Select
        value={value}
        options={[{ label: 'Select Tag', value: 'select' }, ...options]}
        onChange={handleChange}
      />

      {tags.map((tag, index) => (
        <span
          key={index}
          className='inline-flex h-10 items-center gap-2.5 rounded-lg bg-gray-200 pl-3 pr-2.5 dark:bg-gray-700'
        >
          {tag}
          <FontAwesomeIcon
            icon={faCircleXmark}
            className='cursor-pointer hover:opacity-50'
            size='lg'
            onClick={() => handleRemoveClick(tag)}
          />
        </span>
      ))}
    </div>
  );
};

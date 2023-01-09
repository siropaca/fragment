import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment, MouseEvent, MouseEventHandler, ReactNode } from 'react';

import { filterElement, findElement } from '@/utils/element';

interface Props {
  children: ReactNode | ReactNode[];
  rootClassName?: string;
  itemsClassName?: string;
  as?: React.ElementType;
  divide?: boolean;
}

export const DropdownMenu = ({ as = 'div', divide = true, ...props }: Props): JSX.Element => {
  const childElements = React.Children.toArray(props.children);
  const ButtonElement = findElement(childElements, DropdownMenu.Button);
  const ItemElements = filterElement(childElements, DropdownMenu.MenuItem);

  return (
    <Menu
      as={as}
      className={clsx('relative inline-block text-left', props.rootClassName)}
    >
      {ButtonElement}

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={clsx(
            'absolute right-0 z-10 w-max max-w-xs overflow-y-auto overflow-x-hidden rounded-lg border border-gray-200 bg-white shadow-lg focus:outline-none dark:border-gray-600 dark:bg-zinc-700',
            divide && 'divide-y divide-gray-200 dark:divide-gray-600',
            props.itemsClassName,
          )}
        >
          {ItemElements}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

// ---

interface DropdownMenuButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  as?: React.ElementType;
  onClick?: MouseEventHandler;
}

// eslint-disable-next-line react/display-name
DropdownMenu.Button = ({ as = 'button', ...props }: DropdownMenuButtonProps): JSX.Element => {
  return (
    <Menu.Button
      as={as}
      className={clsx('focus:outline-none', props.className)}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Menu.Button>
  );
};

// ---

interface DropdownMenuItemProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  as?: React.ElementType;
  href?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

// eslint-disable-next-line react/display-name
DropdownMenu.MenuItem = ({ as = 'div', ...props }: DropdownMenuItemProps): JSX.Element => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (props.onClick && !props.disabled) {
      props.onClick(event);
    }
  };

  return (
    <Menu.Item
      disabled={props.disabled}
      as={as}
      href={props.href}
      target={props.target}
    >
      <div
        className={clsx(
          'flex w-full items-center p-3 text-sm',
          props.disabled
            ? 'cursor-not-allowed opacity-40'
            : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600',
          props.className,
        )}
        onClick={handleClick}
      >
        {props.children}
      </div>
    </Menu.Item>
  );
};

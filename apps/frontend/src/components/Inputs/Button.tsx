import { faSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

type Variant = 'contained' | 'text' | 'outlined';
type Color = 'primary';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  color?: Color;
  size?: 'small' | 'medium';
  loading?: boolean;
}

const COLORS: Record<Variant, Record<Color, string>> = {
  text: {
    primary: 'text-cyan-600 border rounded-lg border-transparent',
  },
  contained: {
    primary: 'border rounded-lg bg-cyan-600 text-white border-cyan-600',
  },
  outlined: {
    primary: 'text-cyan-600 border rounded-lg border-cyan-600',
  },
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { variant, color = 'primary', size = 'medium', loading = false, ...buttonProps }: Props,
    ref,
  ) => {
    return (
      <button
        ref={ref}
        {...buttonProps}
        type={buttonProps.type ?? 'button'}
        className={clsx(
          'inline-flex select-none items-center gap-x-2 px-3 tracking-wider focus:outline-none',
          size === 'medium' && 'h-10',
          size === 'small' && 'h-8 text-sm',
          buttonProps.disabled ? 'cursor-not-allowed grayscale' : 'cursor-pointer hover:opacity-80',
          COLORS[variant][color],
          buttonProps.className,
        )}
      >
        {loading && (
          <FontAwesomeIcon
            icon={faSlash}
            spin
            size='2xs'
            // @ts-ignore
            style={{ '--fa-animation-duration': '1.1s' }}
          />
        )}
        {buttonProps.children}
      </button>
    );
  },
);

Button.displayName = 'Button';

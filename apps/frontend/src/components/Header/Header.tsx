import process from 'process';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { About, Blog, Contact, Logo, Tools } from '@/components/assets';
import { URL } from '@/lib/router';

const MENUS = [
  {
    a: {
      name: 'Blog',
      href: URL.blog(),
    },
    text: () => {
      return (
        <Blog
          className='relative top-0.5 w-auto'
          style={{ height: '18px' }}
        />
      );
    },
  },
  // TODO: ページを追加する
  {
    a: {
      name: 'Tools',
      href: '#',
    },
    text: () => {
      return (
        <Tools
          className='relative top-0.5 w-auto'
          style={{ height: '16px' }}
        />
      );
    },
  },
  // TODO: ページを追加する
  {
    a: {
      name: 'About',
      href: '#',
    },
    text: () => {
      return (
        <About
          className='relative top-0.5 w-auto'
          style={{ height: '16px' }}
        />
      );
    },
  },
  {
    a: {
      name: 'Contact',
      href: `href="mailto:${process.env.NEXT_PUBLIC_EMAIL}"`,
      target: '_blank',
      rel: 'noreferrer',
    },
    text: () => {
      return (
        <Contact
          className='relative top-0.5 w-auto'
          style={{ height: '16px' }}
        />
      );
    },
  },
];

export const Header = (): JSX.Element => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

  return (
    <header className='sticky top-0 z-10 h-11 border-b border-gray-100 bg-white dark:border-zinc-700 dark:bg-zinc-800 md:h-16'>
      <div className='mx-auto flex h-full w-full items-center justify-between px-4 md:px-8'>
        <Link href={URL.root()}>
          <Logo className='relative top-0.5 h-7 w-auto' />
          <span className='sr-only'>{siteName}</span>
        </Link>

        {/* TODO: 実装する */}
        {/* ハンバーガーメニュー */}
        <span className='cursor-pointer hover:opacity-50 lg:hidden'>
          <FontAwesomeIcon
            icon={faBars}
            size='xl'
          />
        </span>

        {/* PC用メニュー */}
        <div className='hidden gap-x-6 lg:flex'>
          {MENUS.map((menu, index) => {
            return (
              <Link
                key={index}
                {...menu.a}
                className='hover:opacity-50'
              >
                <menu.text />
                <span className='sr-only'>{menu.a.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

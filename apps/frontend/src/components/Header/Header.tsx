import process from 'process';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import { URL } from '@/lib/router';

const MENUS = [
  {
    a: {
      href: URL.blog(),
    },
    img: {
      src: '/texts/Blog.svg',
      alt: 'Blog',
      width: 47,
      height: 20,
    },
  },
  // TODO: ページを追加する
  {
    a: {
      href: '#',
    },
    img: {
      src: '/texts/Tools.svg',
      alt: 'Tools',
      width: 58,
      height: 17,
    },
  },
  // TODO: ページを追加する
  {
    a: {
      href: '#',
    },
    img: {
      src: '/texts/About.svg',
      alt: 'About',
      width: 69,
      height: 18,
    },
  },
  // TODO: メールアドレスを設定する
  {
    a: {
      href: '#',
      target: '_blank',
      rel: 'noreferrer',
    },
    img: {
      src: '/texts/Contact.svg',
      alt: 'Contact',
      width: 87,
      height: 17,
    },
  },
];

export const Header = (): JSX.Element => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

  return (
    <header className='h-11 border-b md:h-16'>
      <div className='mx-auto flex h-full w-full items-center justify-between px-4 md:px-8'>
        <Link href={URL.root()}>
          <Image
            src='/logo_b.svg'
            alt={siteName}
            width={150}
            height={27}
            priority
            className='relative top-0.5'
          />
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
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image {...menu.img} />
                <span className='sr-only'>{menu.img.alt}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

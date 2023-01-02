import process from 'process';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import { URL } from '@/lib/router';

const HEADER_HEIGHT = '62px';

const MENUS = [
  {
    a: {
      href: URL.blog(),
    },
    img: {
      src: '/texts/Blog.svg',
      alt: 'Blog',
      width: 49,
      height: 20,
    },
  },
  // TODO: ページを追加する
  {
    a: {
      href: URL.root(),
    },
    img: {
      src: '/texts/Tools.svg',
      alt: 'Tools',
      width: 60,
      height: 18,
    },
  },
  // TODO: ページを追加する
  {
    a: {
      href: URL.root(),
    },
    img: {
      src: '/texts/About.svg',
      alt: 'About',
      width: 71,
      height: 18,
    },
  },
  // TODO: メールアドレスを設定する
  {
    a: {
      href: '/texts/Contact.svg',
      rel: 'noreferrer',
    },
    img: {
      src: '/texts/Contact.svg',
      alt: 'Contact',
      width: 89,
      height: 18,
    },
  },
];

export const Header = (): JSX.Element => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

  return (
    <header
      className='border-b'
      style={{ height: HEADER_HEIGHT }}
    >
      <div className='mx-auto flex h-full w-full items-center justify-between px-8'>
        <Link href={URL.root()}>
          <Image
            src='/logo_b.svg'
            alt={siteName}
            width={150}
            height={27}
            priority
            className='relative top-1'
          />
        </Link>

        {/* TODO: 実装する */}
        {/* ハンバーガーメニュー */}
        <span className='lg:hidden'>
          <FontAwesomeIcon
            icon={faBars}
            className='text-gray-600'
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
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

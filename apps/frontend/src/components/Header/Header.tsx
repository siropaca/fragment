import process from 'process';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import { URL } from '@/lib/router';

const HEADER_HEIGHT = '62px';

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

        <div className='flex gap-x-6'>
          <Link
            href={URL.blog()}
            className='hover:opacity-50'
          >
            <Image
              src='/texts/Blog.svg'
              alt='Blog'
              width={49}
              height={20}
            />
          </Link>

          {/* TODO: ページを追加する */}
          <Link
            href={URL.root()}
            className='hover:opacity-50'
          >
            <Image
              src='/texts/Tools.svg'
              alt='Blog'
              width={60}
              height={18}
            />
          </Link>

          {/* TODO: ページを追加する */}
          <Link
            href={URL.root()}
            className='hover:opacity-50'
          >
            <Image
              src='/texts/About.svg'
              alt='Blog'
              width={71}
              height={18}
            />
          </Link>

          {/* TODO: メールアドレスを設定する */}
          <a
            href='mailto:info&#64;example.com'
            target='_blank'
            className='inline-flex items-end gap-x-2 hover:opacity-50'
            rel='noreferrer'
          >
            <Image
              src='/texts/Contact.svg'
              alt='Blog'
              width={89}
              height={18}
            />

            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className='text-gray-400'
              size='2xs'
            />
          </a>
        </div>
      </div>
    </header>
  );
};

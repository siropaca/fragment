import Image from 'next/image';
import Link from 'next/link';

import { URL } from '@/lib/router';

const HEADER_HEIGHT = '62px';

export const Header = (): JSX.Element => {
  return (
    <header
      className='border-b'
      style={{ height: HEADER_HEIGHT }}
    >
      <div className='mx-auto flex h-full w-full items-center px-8'>
        <Link href={URL.root()}>
          <Image
            src='/logo_b.svg'
            alt='Fragment'
            width={150}
            height={27}
            priority
            className='relative top-1'
          />
        </Link>
      </div>
    </header>
  );
};

import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { URL } from '@/lib/router';

const NAVIGATIONS = {
  main: [
    { name: 'Blog', href: URL.blog() },
    // TODO: URLを設定する
    { name: 'Tools', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#', target: '_blank' },
  ],
  social: [
    {
      name: 'GitHub',
      href: '#',
      icon: () => (
        <FontAwesomeIcon
          icon={faGithub}
          className='text-gray-500'
          size='2x'
        />
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: () => (
        <FontAwesomeIcon
          icon={faTwitter}
          className='text-gray-500'
          size='2x'
        />
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: () => (
        <FontAwesomeIcon
          icon={faInstagram}
          className='text-gray-500'
          size='2x'
        />
      ),
    },
  ],
};

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

  return (
    <footer className='bg-white dark:bg-zinc-800'>
      <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex grow flex-wrap justify-center'
          aria-label='Footer'
        >
          {NAVIGATIONS.main.map((item) => (
            <div
              key={item.name}
              className='px-5 py-2'
            >
              <Link
                {...item}
                className='text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className='mt-8 flex justify-center space-x-10'>
          {NAVIGATIONS.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noreferrer'
              className='text-gray-400 dark:text-gray-400'
            >
              <item.icon />
              <span className='sr-only'>{item.icon.name}</span>
            </a>
          ))}
        </div>

        <p className='mt-8 text-center text-base text-gray-400 dark:text-gray-500'>
          &copy; {currentYear} {siteName}, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

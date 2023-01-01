import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: () => (
        <FontAwesomeIcon
          icon={faFacebook}
          className='h-5 w-5 text-gray-500'
        />
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: () => (
        <FontAwesomeIcon
          icon={faInstagram}
          className='h-5 w-5 text-gray-500'
        />
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: () => (
        <FontAwesomeIcon
          icon={faTwitter}
          className='h-5 w-5 text-gray-500'
        />
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: () => (
        <FontAwesomeIcon
          icon={faGithub}
          className='h-5 w-5 text-gray-500'
        />
      ),
    },
  ],
};

export const Footer = (): JSX.Element => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex grow flex-wrap justify-center'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div
              key={item.name}
              className='px-5 py-2'
            >
              <a
                href={item.href}
                className='text-base text-gray-500 hover:text-gray-900'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <div className='mt-8 flex justify-center space-x-6'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

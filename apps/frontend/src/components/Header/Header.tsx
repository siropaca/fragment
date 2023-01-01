import { faChevronDown, faUserNinja, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

import { URL } from '@/lib/router';

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
  },
];

const callsToAction = [
  { name: 'Watch Demo', href: '#' },
  { name: 'Contact Sales', href: '#' },
];

const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
];

const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

export const Header = (): JSX.Element => {
  return (
    <Popover className='relative bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href={URL.root()}>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </Link>
          </div>

          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <FontAwesomeIcon
                icon={faUserNinja}
                className='h-6 w-6'
              />
            </Popover.Button>
          </div>

          <Popover.Group
            as='nav'
            className='hidden space-x-10 md:flex'
          >
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsx(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                    )}
                  >
                    <span>Solutions</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={clsx(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                            >
                              <FontAwesomeIcon
                                icon={faUserNinja}
                                className='h-6 w-6 shrink-0 text-indigo-600'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>{item.name}</p>
                                <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className='space-y-6 bg-gray-50 p-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                          {callsToAction.map((item) => (
                            <div
                              key={item.name}
                              className='flow-root'
                            >
                              <a
                                href={item.href}
                                className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100'
                              >
                                <FontAwesomeIcon
                                  icon={faUserNinja}
                                  className='h-6 w-6 shrink-0 text-gray-400'
                                />
                                <span className='ml-3'>{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Pricing
            </a>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Docs
            </a>

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsx(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                    )}
                  >
                    <span>More</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={clsx(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 px-2 sm:px-0'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                            >
                              <FontAwesomeIcon
                                icon={faUserNinja}
                                className='h-6 w-6 shrink-0 text-indigo-600'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>{item.name}</p>
                                <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className='bg-gray-50 p-5 sm:p-8'>
                          <div>
                            <h3 className='text-base font-medium text-gray-500'>Recent Posts</h3>
                            <ul
                              role='list'
                              className='mt-4 space-y-4'
                            >
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className='truncate text-base'
                                >
                                  <a
                                    href={post.href}
                                    className='font-medium text-gray-900 hover:text-gray-700'
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className='mt-5 text-sm'>
                            <a
                              href='#'
                              className='font-medium text-indigo-600 hover:text-indigo-500'
                            >
                              View all posts
                              <span aria-hidden='true'> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Sign in
            </a>
            <a
              href='#'
              className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                    alt='Your Company'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className='h-6 w-6'
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      <FontAwesomeIcon
                        icon={faUserNinja}
                        className='h-6 w-6 shrink-0 text-indigo-600'
                      />
                      <span className='ml-3 text-base font-medium text-gray-900'>{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Pricing
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?{' '}
                  <a
                    href='#'
                    className='text-indigo-600 hover:text-indigo-500'
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

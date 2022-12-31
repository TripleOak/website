import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/20/solid'

export default function Header() {
  const router = useRouter();

  return (
    <header className="mb-16">
      <Disclosure as="nav" className="px-2 py-2.5 w-full sm:w-11/12 md:w-3/4 mx-auto border-b border-gray-300">
        {({ open }) => (
          <>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <Link href="/">
                <img src="/logo.png" className="mr-3 h-12 sm:h-14" />
              </Link>

              <div className="flex items-start sm:order-2 sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden justify-between items-center w-full sm:flex sm:w-auto sm:order-1">
                <ul className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 font-sans font-light uppercase">
                  <li className={`block py-2 pr-4 pl-3 hover:text-gray-900 ${router.pathname === '/' ? 'text-gray-900' : 'text-gray-400'}`}>
                    <Link href="/" aria-current="page">About</Link>
                  </li>
                  <li className={`block py-2 pr-4 pl-3 hover:text-gray-900 ${router.pathname === '/team' ? 'text-gray-900' : 'text-gray-400'}`}>
                    <Link href="/team" aria-current="page">Team</Link>
                  </li>
                  <li className={`block py-2 pr-4 pl-3 hover:text-gray-900 ${router.pathname === '/contact' ? 'text-gray-900' : 'text-gray-400'}`}>
                    <Link href="/contact" aria-current="page">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 font-sans font-light uppercase">
                <Disclosure.Button as="a" href="/" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-white rounded-md hover:bg-gray-700" aria-current="page">
                  About
                </Disclosure.Button>
                <Disclosure.Button as="a" href="/team" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-white rounded-md hover:bg-gray-700" aria-current="page">
                  Team
                </Disclosure.Button>
                <Disclosure.Button as="a" href="/contact" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-white rounded-md hover:bg-gray-700" aria-current="page">
                  Contact
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header >
  );
}


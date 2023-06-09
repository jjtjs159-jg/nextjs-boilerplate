import Image from 'next/image';
import Link from 'next/link';

import Navbar from './Navbar';

import { AiOutlineBell, AiOutlineGithub } from 'react-icons/ai';

export default function Header() {
  const navLinks = [
    {
      name: 'docs',
      href: '/docs',
    },
    {
      name: 'components',
      href: '/ui',
    },
    {
      name: 'about',
      href: '/about',
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-gray-300 border-b dark:bg-red-500">
      <div className="mx-auto max-w-7xl">
        <div className="py-4 mx-4">
          <div className="flex items-center">
            <Link href="/" aria-label="Go to the homepage">
              <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
            </Link>
            <div className="flex items-center ml-auto">
              <Navbar navLinks={navLinks} />
              <div className="flex items-center pl-6 ml-6 border-l border-gray-400">
                <button type="button" aria-label="Alert">
                  <AiOutlineBell className="w-6 h-6" />
                </button>
                <Link href="/" className="ml-6" aria-label="Github">
                  <AiOutlineGithub className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

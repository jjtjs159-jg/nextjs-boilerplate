import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaBell } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b">
      <div className="max-w-7xl mx-auto">
        <div className="py-4 mx-4">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
            </Link>
            <div className="flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-800">
                <ul className="flex space-x-8">
                  <li>
                    <Link href="/" className="hover:text-green-700">
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-green-700">
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-green-700">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center ml-6 pl-6 border-l border-gray-400">
                <button type="button">
                  <FaBell className="w-5 h-5" />
                </button>
                <Link href="/" className="ml-6">
                  <FaGithub className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

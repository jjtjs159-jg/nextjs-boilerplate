'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  navLinks: {
    name: string;
    href: string;
  }[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();

  return (
    <nav className="text-sm font-bold leading-6 text-slate-800">
      <ul className="flex space-x-8">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  isActive
                    ? 'text-blue-700'
                    : 'text-gray-600 hover:text-green-700'
                }
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

'use client';

import Link from 'next/link';

import { AiOutlineDesktop } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';

import useTheme from '@/hooks/useTheme';

export default function Footer() {
  const { onChange } = useTheme();

  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-7xl">
        <div className="py-4 mx-4">
          <div className="flex justify-between">
            {Array.from(Array(5)).map((column, index) => (
              <div key={`${column}_${index}`}>
                <h4 className="block font-semibold">Text {column}</h4>
                <div className="text-sm leading-6">
                  {Array.from(Array(5)).map((item, index) => (
                    <Link href="/" className="block my-3" key={`${item}__${index}`}>
                      Item {index}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-end justify-between mt-11">
            <div className="text-gray-800">
              <p className="text-sm font-semibold leading-6">Made by jgpark</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 border rounded-full">
              <button type="button" onClick={() => onChange('system')}>
                <AiOutlineDesktop className="w-5 h-5" />
              </button>
              <button type="button" onClick={() => onChange('light')}>
                <FiSun className="w-5 h-5" />
              </button>
              <button type="button" onClick={() => onChange('dark')}>
                <FiMoon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

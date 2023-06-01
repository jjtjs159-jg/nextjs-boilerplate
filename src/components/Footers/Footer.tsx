import Link from 'next/link';
import { FaDesktop, FaSun, FaMoon } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="max-w-7xl mx-auto">
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
          <div className="flex justify-between items-end mt-11">
            <div className="text-gray-800">
              <p className="text-sm leading-6 font-semibold">Made by jgpark</p>
            </div>
            <div className="flex items-center gap-3 py-2 px-3 border rounded-full">
              <button type="button">
                <FaDesktop className="w-5 h-5" />
              </button>
              <button type="button">
                <FaSun className="w-5 h-5" />
              </button>
              <button type="button">
                <FaMoon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

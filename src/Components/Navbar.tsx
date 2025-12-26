// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Web of SEM Logo"
              width={40}
              height={40}
              className="mr-2 sm:mr-3 w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="text-base sm:text-xl font-semibold text-gray-900">
              Web of SEM
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:text-gray-900 transition-colors">
              <div className="relative flex items-center">
                <Image
                  src="/avatar-1.png"
                  alt="User"
                  width={24}
                  height={24}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/avatar-2.png"
                  alt="User"
                  width={24}
                  height={24}
                  className="rounded-full border-2 border-white -ml-2"
                />
              </div>
              <span className="whitespace-nowrap">Get Early access</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

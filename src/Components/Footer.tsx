// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Web of SEM Logo"
              width={40}
              height={40}
              className="mr-2 sm:mr-3 w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="text-lg sm:text-xl font-semibold text-gray-900">
              Web of SEM
            </span>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
            <a
              href="mailto:semilu@webofsem.com"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="break-all">semilu@webofsem.com</span>
            </a>

            <a
              href="tel:+2347081068050"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="whitespace-nowrap">(+234)7081068050</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200 text-center text-xs sm:text-sm text-gray-500">
          © 2025 Web of SEM. All rights reserved by Semilu Consult
        </div>
      </div>
    </footer>
  );
}

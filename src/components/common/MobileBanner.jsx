"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function MobileBanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const isOnHomePage = pathName === "/";
  const isOnAboutPage = pathName === "/about";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center w-full py-4 fixed top-[0px] left-[0px] backdrop-blur-md z-10">
        <a href="/" className="flex justify-between items-center font-digifit text-body-xl px-3 ml-3 gap-3">
          <Image
            src="/favicon.ico"
            alt="Site Icon"
            width={30}
            height={30}
            className="mb-2"
            placeholder="empty"
          />
          <span>
            Leo Shang
          </span>
        </a>
        <button onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay Navigation (Mobile) */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
        >
          <div className="flex flex-col items-center justify-center w-full h-full bg-white bg-opacity-80 space-y-6">
            <Link
              href="/"
              className={`font-IBMMedium text-body-xl px-6 py-1 rounded-full
                focus-visible:outline-dotted 
                focus-visible:outline-2   
              ${
                isOnHomePage
                  ? "text-white bg-primary hover:bg-[#001FCC] hover:text-gray-100"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-IBMMedium text-body-xl px-6 py-1 rounded-full 
                focus-visible:outline-dotted 
                focus-visible:outline-2
                ${
                isOnAboutPage
                  ? "text-white bg-primary hover:bg-[#001FCC] hover:text-gray-100"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              About Me
            </Link>
            <a
              href="https://drive.google.com/file/d/1tejVYfIfNaG9MtQx6fwCBLotd5OgTMXw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-IBMMedium text-body-xl px-6 py-1 rounded-full text-gray-700 hover:bg-gray-100
                focus-visible:outline-dotted 
                focus-visible:outline-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

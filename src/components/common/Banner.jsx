"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Banner() {
  const pathName = usePathname();

  const isOnHomePage = pathName === "/";
  const isOnAboutPage = pathName === "/about";

  return (
    <div className="hidden md:block">
      <nav className="flex items-center h-[60px] w-full whitespace-nowrap lg:text-[20px] text-[17px] justify-between fixed top-[0px] left-[0px] backdrop-blur-md z-10">
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
        <div className="flex flex-row gap-5">
          <Link
            className={`font-IBMMedium text-body-xl px-6 
              focus-visible:outline-offset-2 
              focus-visible:outline-dotted 
              focus-visible:outline-2
              ${
              isOnHomePage
                ? "text-white bg-primary  py-1 rounded-full"
                : "hover:bg-white bg-opacity-50 transition-colors py-1 rounded-full"
              }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`font-IBMMedium text-body-xl px-6 
              focus-visible:outline-offset-2 
              focus-visible:outline-dotted 
              focus-visible:outline-2
              ${
              isOnAboutPage
                ? "text-white bg-primary  py-1 rounded-full"
                : "hover:bg-white bg-opacity-50 transition-colors py-1 rounded-full"
              }`}
            href="/about"
          >
            About Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1Z8hR7aSlYPSzk5jfkf7XzDAnRq_rlYZA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-IBMMedium text-body-xl px-6 hover:bg-white bg-opacity-50 transition-colors py-1 rounded-full mr-2
              focus-visible:outline-offset-2 
              focus-visible:outline-dotted 
              focus-visible:outline-2"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
}

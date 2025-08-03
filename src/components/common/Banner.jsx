"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Banner() {
  const pathName = usePathname();

  const isHomePage = pathName === "/";
  const isAboutPage = pathName === "/about";

  return (
    <div className="hidden md:block">
      <nav className="flex items-center h-[60px] w-full whitespace-nowrap lg:text-[20px] text-[17px] justify-between fixed top-[0px] left-[0px] backdrop-blur-md z-10">
        <div className="flex items-center ml-3">
          <Image
            src="/favicon.ico"
            alt="Site Icon"
            width={30}
            height={30}
            className="mb-2"
            placeholder="empty"
          />
          <a className="font-digifit text-body-xl px-6">Leo Shang</a>
        </div>
        <div className="flex flex-row gap-5">
          <Link
            className={`font-IBMMedium text-body-xl px-6 ${
              isHomePage
                ? "text-white bg-primary  py-1 rounded-full"
                : "hover:bg-white bg-opacity-50 transition-colors py-1 rounded-full"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`font-IBMMedium text-body-xl px-6 ${
              isAboutPage
                ? "text-white bg-primary  py-1 rounded-full"
                : "hover:bg-white bg-opacity-50 transition-colors py-1 rounded-full"
            }`}
            href="/about"
          >
            About Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1tejVYfIfNaG9MtQx6fwCBLotd5OgTMXw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-IBMMedium text-body-xl px-6 hover:bg-white bg-opacity-50 transition-colors py-1 rounded-full mr-2"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
}

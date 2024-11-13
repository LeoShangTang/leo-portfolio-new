"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Banner() {
  const pathName = usePathname();

  const isHomePage = pathName === "/";
  const isAboutPage = pathName === "/about";

  return (
    <nav className="flex items-center h-[50px] w-full whitespace-nowrap lg:text-[20px] text-[17px] justify-between fixed top-0 left-0 backdrop-blur-md z-10">
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
      <div>
        <Link
          className={`font-IBMMedium text-body-xl px-6 ${
            isHomePage
              ? "text-white bg-[#002AFF]  hover:bg-[#001FCC] hover:text-gray-100 py-1 rounded-full"
              : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`font-IBMMedium text-body-xl px-6 ${
            isAboutPage
              ? "text-white bg-[#002AFF]  hover:bg-[#001FCC] hover:text-gray-100 py-1 rounded-full"
              : ""
          }`}
          href="/about"
        >
          About
        </Link>
        <a
          href="https://drive.google.com/file/d/1tejVYfIfNaG9MtQx6fwCBLotd5OgTMXw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-IBMMedium text-body-xl px-6"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

import Image from "next/image";

export default function Banner() {
  return (
    <nav className="flex items-center h-[50px] w-full whitespace-nowrap lg:text-[20px] text-[17px] justify-between fixed top-0 left-0 backdrop-blur-md z-10">
      <div className="flex items-center ml-3">
        <Image
          src="/favicon.ico"
          alt="Site Icon"
          width={30}
          height={30}
          className="mb-2"
        />
        <a className="font-digifit text-body-xl px-6">Leo Shang</a>
      </div>
      <div>
        <a className="font-IBMMedium text-body-xl px-6">Home</a>
        <a className="font-IBMMedium text-body-xl px-6">About</a>
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

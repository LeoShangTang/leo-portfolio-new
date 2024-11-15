import Image from "next/image";
export default function Title() {
  return (
    <div className="flex flex-col w-full justify-center items-start mx-auto">
      <div className="flex h-auto gap-10">
        <div className="relative min-w-[250px] flex-shrink-0 hidden lg:block">
          <Image
            src="/images/Me2.webp"
            alt="Picture of Leo Shang in the Museum"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-digifit text-title-md mb-2 md:text-title-xl">
            Leo Shang
          </div>
          <div className="font-IBMMedium text-body-md md:text-body-xl">
            I'm a 3rd-year computer science student with{" "}
            <span className="font-IBMBold">Full</span>{" "}
            <span className="font-IBMBold">Stack</span> and{" "}
            <span className="font-IBMBold whitespace-nowrap">UI/UX design</span>{" "}
            experience, designing and developing solutions to problems.
          </div>
        </div>
      </div>

      <div className="font-IBMBold mt-10 mb-1 text-sub-title-md md:text-sub-title-xl ">
        My Work
      </div>
    </div>
  );
}

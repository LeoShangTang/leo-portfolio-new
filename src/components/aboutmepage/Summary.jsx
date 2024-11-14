import Image from "next/image";

export default function Summary() {
  return (
    <section className="flex flex-col items-center w-full mb-40">
      <h1 className="font-digifit whitespace-nowrap mb-10 text-[62px] sm:text-title-md md:text-title-xl ">
        About me
      </h1>
      <div className="flex gap-10 w-full flex-col lg:flex-row">
        <div className="relative w-full aspect-video lg:aspect-square lg:w-1/3 self-center">
          <Image
            src="/images/Me1.jpg"
            alt="Picture of Leo Shang in the Wilderness (UBC)"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
            className="rounded-lg"
          />
        </div>
        <article className="flex flex-col w-[90%] lg:w-2/3 justify-center">
          <h2 className="font-IBMRegular mb-10 text-sub-title-md md:text-sub-title-xl">
            I’m{" "}
            <span className="font-IBMBold whitespace-nowrap">Leo Shang</span>, a
            computer science student at UBC.
          </h2>
          <h2 className="font-IBMRegular text-body-md md:text-body-xl">
            <span className="font-IBMBold whitespace-nowrap">Programing</span>{" "}
            since high school and{" "}
            <span className="font-IBMBold whitespace-nowrap">designing</span>{" "}
            since middle school, I love turning ideas into{" "}
            <span className="font-IBMBold whitespace-nowrap">
              visual concepts
            </span>{" "}
            and bringing them to life through{" "}
            <span className="font-IBMBold whitespace-nowrap">code</span>.
          </h2>
        </article>
      </div>
    </section>
  );
}

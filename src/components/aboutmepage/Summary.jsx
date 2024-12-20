import Image from "next/image";

export default function Summary() {
  return (
    <section className="flex flex-col items-center w-full mb-10">
      <h1 className="font-digifit whitespace-nowrap mb-5 text-[62px] sm:text-title-md md:text-title-xl ">
        About me
      </h1>
      <div className="flex gap-10 w-full flex-col lg:flex-row">
        <div className="relative w-full aspect-video lg:aspect-square lg:w-1/3 self-center">
          <Image
            src="/images/Me1.jpg"
            alt="Picture of Leo Shang in the Wilderness (UBC)"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
            className="rounded-lg"
          />
        </div>
        <article className="flex flex-col w-full lg:w-2/3 justify-center">
          {/* <h2 className="font-IBMRegular mb-10 text-sub-title-md md:text-sub-title-xl">
            I’m Leo Shang, a computer science student at UBC.
          </h2> */}
          <h2 className="font-IBMMedium text-body-md md:text-body-xl">
            Programing since high school and designing since middle school, I
            love turning ideas into visual concepts and bringing them to life
            through code.
          </h2>
        </article>
      </div>
    </section>
  );
}

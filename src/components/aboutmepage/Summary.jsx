import Image from "next/image";

export default function Summary() {
  return (
    <section className="flex flex-col items-center w-full mb-40">
      <h1 className="text-title-xl font-digifit whitespace-nowrap mb-10">
        About me
      </h1>
      <div className="flex flex-row gap-10 w-full">
        <div className="relative w-1/3 aspect-square">
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
        <article className="flex flex-col w-2/3 justify-center">
          <h2 className="text-sub-title-xl font-IBMRegular mb-10">
            I’m{" "}
            <span className="font-IBMBold whitespace-nowrap">Leo Shang</span>, a
            computer science student at UBC.
          </h2>
          <h2 className="text-body-xl font-IBMRegular">
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

import Image from "next/image";

export default function Summary() {
  return (
    <section className="flex flex-col items-center w-full mb-32">
      <h1 className="text-title-xl font-digifit whitespace-nowrap">About me</h1>
      <div className="flex flex-row gap-10 w-full">
        <div className="relative w-1/2 aspect-square">
          <Image
            src="/images/Me1.jpg"
            alt="Picture of Leo Shang in the Wilderness (UBC)"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </div>
        <div className="flex flex-col w-1/2 justify-evenly">
          <h2 className="text-sub-title-xl font-IBMRegular">
            I’m <span className="font-bold whitespace-nowrap">Leo Shang</span>,
            a computer science student at UBC.
          </h2>
          <h2 className="text-sub-title-xl font-IBMRegular">
            <span className="font-bold whitespace-nowrap">Programing</span>{" "}
            since high school and{" "}
            <span className="font-bold whitespace-nowrap">designing</span> since
            middle school, I love turning ideas into{" "}
            <span className="font-bold whitespace-nowrap">visual concepts</span>{" "}
            and bringing them to life through{" "}
            <span className="font-bold whitespace-nowrap">code</span>.
          </h2>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function FreeTime() {
  return (
    <section className="flex flex-row items-center gap-5 mb-40 w-full">
      <article className="w-2/3">
        <h2 className="font-IBMMedium text-sub-title-xl mb-10">
          What am I doing{" "}
          <span className="font-bold whitespace-nowrap">outside</span> of
          school?
        </h2>
        <p className="font-IBMMedium text-body-xl">
          <div className="mb-7">
            I'm currently an executive member of two clubs, a{" "}
            <span className="font-bold whitespace-nowrap">
              graphic designer
            </span>{" "}
            for the Cooking Club and a{" "}
            <span className="font-bold whitespace-nowrap">
              marketing strategist{" "}
            </span>{" "}
            and{" "}
            <span className="font-bold whitespace-nowrap">UI/UX developer</span>{" "}
            for BOLT UBC.
          </div>
          <div>
            In my free time, I enjoy staying active by playing{" "}
            <span className="font-bold whitespace-nowrap">badminton</span> and
            going to the gym, and I also love doing{" "}
            <span className="font-bold whitespace-nowrap">graphic design</span>!
          </div>
        </p>
      </article>
      <div className="relative w-1/3 aspect-square">
        <Image
          src="/images/Me3.webp"
          alt="Leo Shang outside in the wild again"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

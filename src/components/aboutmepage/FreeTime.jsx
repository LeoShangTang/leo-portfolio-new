import Image from "next/image";

export default function FreeTime() {
  return (
    <section className="flex flex-row items-center gap-5 mb-40 w-full">
      <article className="w-full lg:w-2/3">
        <h2 className="font-IBMBold text-sub-title-md md:text-sub-title-xl mb-10">
          My Interests
        </h2>
        <div className="font-IBMMedium text-body-md md:text-body-xl">
          <p className="mb-7">
            I'm currently execs of two clubs, a graphic designer for Cooking
            Club and a marketing strategist + UI/UX developer for BOLT UBC.
          </p>
          <p>
            In my free time, I like staying active by playing badminton and
            going to the gym. I also love doing graphic design!
          </p>
        </div>
      </article>
      <div className="relative w-1/3 aspect-[4/5] hidden lg:block">
        <Image
          src="/images/Me3.webp"
          alt="Leo Shang outside in the wild again"
          layout="fill"
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

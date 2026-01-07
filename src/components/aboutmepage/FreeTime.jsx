import Image from "next/image";

export default function FreeTime() {
  return (
    <section className="flex flex-row items-center gap-5 mb-40 w-full">
      <article className="w-full lg:w-2/3">
        <h2 className="font-IBMBold text-sub-title-md md:text-sub-title-xl mb-10">
          My Hobbies
        </h2>
        <div className="font-IBMMedium text-body-md md:text-body-xl">
          <p className="mb-7">
              As I mentioned, I really enjoy graphic design as I've been making posters based on animes I like, 
              including Evangelion and Chainsaw Man.
          </p>
          <p>
            Off campus, I love thrifting for interesting knick knacks and clothes
            (<a className="underline text-primary hover:no-underline" href="https://www.google.com/maps/place/RAPS+Thrift+Store/@49.1624082,-123.1348883,15z/data=!4m6!3m5!1s0x54860ab45368f339:0xff82e3bacc3f605c!8m2!3d49.1621634!4d-123.1325889!16s%2Fg%2F1tgf2xmb?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">RAPS</a>
            {" "} is great), 
            and I try to stay active with badminton or the gym when I can.
          </p>
        </div>
      </article>
      <div className="relative w-1/3 aspect-[4/5] hidden lg:block">
        <Image
          src="/images/Me4.JPG"
          alt="Image of Leo Shang outside Wreck Beack, UBC"
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
    </section>
  );
}

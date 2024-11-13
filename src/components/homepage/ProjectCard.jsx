"use client";
import PrimaryButton from "../common/PrimaryButton";
import Image from "next/image";

export default function ProjectCard({
  thumbnail,
  title,
  roles,
  tags,
  description,
}) {
  return (
    <div className="flex w-[90%] bg-white bg-opacity-50 backdrop-blur-sm rounded-xl min-h-[600px] mb-10">
      <section className="flex items-center justify-center w-1/2 p-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/RateMyStudySpot/0.png"
            alt="Study Spot"
            fill
            className="object-contain"
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </div>
      </section>
      <section className="flex flex-col items-start justify-around w-1/2 p-10">
        <div>
          <h1 className="font-IBMBold text-sub-title-xl">RateMyStudySpot</h1>
          <p className="font-IBMMedium text-body-xl">UI/UX + Fullstack</p>
        </div>
        <p className="font-IBMMedium text-body-xl text-customGray">
          A web application focused on helping students explore study spots.
        </p>
        <div className="flex flex-wrap w-full gap-5">
          {tags &&
            tags.map((tag, index) => (
              <div
                key={index}
                className="font-IBMMedium text-[20px] flex items-center justify-center w-fit bg-[#D9D9D9] rounded-full px-4 py-1"
              >
                {tag}
              </div>
            ))}
        </div>
        <PrimaryButton
          onClick={() => console.log("hello")}
          text={"View Work"}
        />
      </section>
    </div>
  );
}

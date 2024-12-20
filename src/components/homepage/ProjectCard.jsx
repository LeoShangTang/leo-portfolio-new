"use client";
import PrimaryButton from "../common/PrimaryButton";
import Image from "next/image";
import TechTag from "../common/TechTag";

export default function ProjectCard({
  thumbnail,
  title,
  role,
  technologies,
  description,
}) {
  return (
    <div className="flex flex-col w-full bg-white bg-opacity-40 backdrop-blur-sm rounded-xl mb-10 lg:flex-row md:min-h-[600px]">
      <section className="flex items-center justify-center w-full lg:p-5 lg:w-[45%]">
        <div className="relative w-[80%] h-full aspect-[6/3] mt-5 lg:w-full lg:mt-0">
          <Image
            src={thumbnail}
            alt="Study Spot"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </div>
      </section>
      <section className="flex flex-col items-start p-10 lg:p-5 lg:w-1/2 lg:justify-around">
        <div>
          <h1 className="font-IBMBold text-sub-title-md md:text-sub-title-xl">
            {title}
          </h1>
          <p className="font-IBMMedium text-body-md md:text-body-xl">{role}</p>
        </div>
        <p className="font-IBMMedium text-body-md text-customGray my-7 lg:my-0 md:text-body-xl">
          {description}
        </p>
        <div className="flex flex-wrap w-full gap-2 md:gap-3 mb-7 lg:mb-0">
          {technologies &&
            technologies.map((tech, index) => (
              <TechTag tech={tech} key={index} />
            ))}
        </div>
        {/* <PrimaryButton
          onClick={() => console.log("hello")}
          text={"View Work"}
        /> */}
      </section>
    </div>
  );
}

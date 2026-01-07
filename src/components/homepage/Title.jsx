import Image from "next/image";
import { FaGithub, FaLinkedin, FaJava } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiRedux,
} from "react-icons/si";
import TechTag from "../common/TechTag";

export default function Title() {
  const technologies = [
    {
      name: "TypeScript",
      icon: <SiTypescript color={"#007acc"} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript color={"#E9B626"} />,
    },
    {
      name: "Java",
      icon: <FaJava color={"black"} />,
    },
    {
      name: "C++",
      icon: <SiCplusplus color={"#6294CD"} />,
    },
    {
      name: "HTML",
      icon: <SiHtml5 color={"#f06529"} />,
    },
    {
      name: "CSS",
      icon: <SiCss3 color={"#2464F0"} />,
    },
    {
      name: "React",
      icon: <SiReact color={"#0081A3"} />,
    },
    {
      name: "Redux",
      icon: <SiRedux color={"#7948BB"} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss color={"#38BCF9"} />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs color={"black"} />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs color={"#699F62"} />,
    },
    {
      name: "PostgresSQL",
      icon: <BiLogoPostgresql color={"#326691"} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb color={"#6CAD49"} />,
    },
    {
      name: "Figma",
      icon: <SiFigma color={"#090908"} />,
    },
    {
      name: "GIT",
      icon: <SiGit color={"black"} />,
    },
  ];
  return (
    <div className="flex flex-col w-full justify-center items-start mx-auto">
      <div className="flex h-auto gap-10">
        <div className="relative min-w-[250px] flex-shrink-0 hidden lg:block">
          <Image
            src="/images/Me2.webp"
            alt="Picture of Leo Shang in the Museum"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
            className="rounded-lg"
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-digifit text-title-md md:text-title-xl">
            Leo Shang
          </div>
          <div className="font-IBMMedium text-body-md md:text-body-xl">
            <span className="font-IBMBold">Full-stack</span>{" "}
            <span className="font-IBMBold">developer</span> and 4th-year
            computer science student
          </div>
          <div className="flex flex-row items-center font-IBMBold text-small-md md:text-small-xl  mt-5 gap-2">
            <div className="text-[18px] md:text-[24px]">
              <IoLocationSharp />
            </div>
            Vancouver, BC, Canada
          </div>

          <div className="flex flex-row gap-3 mt-5">
            <a
              href="https://github.com/LeoShangTang"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 text-[18px] md:text-[24px] hover:-translate-y-1 transition-all"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/leo-shang-604911267/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 text-[18px] md:text-[24px] hover:-translate-y-1 transition-all"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:leoshang12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 text-[18px] md:text-[24px] hover:-translate-y-1 transition-all"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
      <div className="font-IBMBold mt-10 mb-1  text-sub-title-md md:text-sub-title-xl ">
        Skills
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3 mt-5">
        {technologies &&
          technologies.map((tech, index) => (
            <TechTag tech={tech} key={index} />
          ))}
      </div>
      <div className="font-IBMBold mt-10 mb-5 text-sub-title-md md:text-sub-title-xl ">
        My Projects
      </div>
    </div>
  );
}

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
} from "react-icons/si";
import TechTag from "../common/TechTag";

export default function Title() {
  const technologies = [
    {
      name: "TypeScript",
      icon: <SiTypescript size={24} color={"#007acc"} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={24} color={"#E9B626"} />,
    },
    {
      name: "Java",
      icon: <FaJava size={24} color={"black"} />,
    },
    {
      name: "C++",
      icon: <SiCplusplus size={24} color={"#6294CD"} />,
    },
    {
      name: "HTML",
      icon: <SiHtml5 size={24} color={"#f06529"} />,
    },
    {
      name: "CSS",
      icon: <SiCss3 size={24} color={"#2464F0"} />,
    },
    {
      name: "React",
      icon: <SiReact size={24} color={"#0081A3"} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={24} color={"#38BCF9"} />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={24} color={"black"} />,
    },
    {
      name: "PostgresSQL",
      icon: <BiLogoPostgresql size={24} color={"#326691"} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={24} color={"#6CAD49"} />,
    },
    {
      name: "Figma",
      icon: <SiFigma size={24} color={"#090908"} />,
    },
    {
      name: "GIT",
      icon: <SiGit size={24} color={"black"} />,
    },
  ];
  return (
    <div className="flex flex-col w-full justify-center items-start mx-auto">
      <div className="flex h-auto gap-10">
        <div className="relative min-w-[250px] flex-shrink-0 hidden lg:block">
          <Image
            src="/images/Me2.webp"
            alt="Picture of Leo Shang in the Museum"
            layout="fill"
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
            <span className="font-IBMBold">developer</span> and 3rd-year
            computer science student
          </div>
          <div className="flex flex-row items-center font-IBMMedium text-small-md md:text-small-xl  mt-5 gap-2">
            <IoLocationSharp size={24} />
            Vancouver, BC, Canada
          </div>

          <div className="flex flex-row gap-3 mt-5">
            <a
              href="https://github.com/LeoShangTang"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/leo-shang-604911267/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:leoshang12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="font-IBMBold mt-10 mb-1  text-sub-title-md md:text-sub-title-xl ">
        Skills
      </div>
      <div className="flex flex-wrap gap-3 mt-5">
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

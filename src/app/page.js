import Title from "@/components/homepage/Title";
import ProjectCard from "@/components/homepage/ProjectCard";
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
import { BiLogoPostgresql } from "react-icons/bi";

function HomePage() {
  const RateMyStudySpotTags = [
    {
      name: "TypeScript",
      icon: <SiTypescript size={24} color={"#007acc"} />,
    },
    {
      name: "PostgresSQL",
      icon: <BiLogoPostgresql size={24} color={"#326691"} />,
    },
    {
      name: "React",
      icon: <SiReact size={24} color={"#0081A3"} />,
    },
    ,
    {
      name: "Figma",
      icon: <SiFigma size={24} color={"#090908"} />,
    },
  ];
  return (
    <div className="flex flex-col items-center mx-auto min-h-screen max-w-[1280px] mt-28 px-5">
      <Title />
      <ProjectCard
        title="RateMyStudySpot"
        role="Full Stack"
        description={
          " A website focused on helping students explore study spots."
        }
        tags={RateMyStudySpotTags}
      />
    </div>
  );
}

export default function Home() {
  return <HomePage />;
}

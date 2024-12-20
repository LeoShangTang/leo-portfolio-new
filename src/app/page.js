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
  SiNodedotjs,
  SiRedux,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

function HomePage() {
  const YelpChatBoxTech = [
    {
      name: "Figma",
      icon: <SiFigma color={"#090908"} />,
    },
  ];
  const DashWashTech = [
    {
      name: "JavaScript",
      icon: <SiJavascript color={"#E9B626"} />,
    },
    {
      name: "React",
      icon: <SiReact color={"#0081A3"} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss color={"#38BCF9"} />,
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
      name: "GIT",
      icon: <SiGit color={"black"} />,
    },
    {
      name: "Figma",
      icon: <SiFigma color={"#090908"} />,
    },
  ];
  const RateMyStudySpotTech = [
    {
      name: "TypeScript",
      icon: <SiTypescript color={"#007acc"} />,
    },
    {
      name: "React",
      icon: <SiReact color={"#0081A3"} />,
    },
    {
      name: "CSS",
      icon: <SiCss3 color={"#2464F0"} />,
    },
    {
      name: "PostgresSQL",
      icon: <BiLogoPostgresql color={"#326691"} />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs color={"#699F62"} />,
    },
    {
      name: "GIT",
      icon: <SiGit color={"black"} />,
    },
    {
      name: "Figma",
      icon: <SiFigma color={"#090908"} />,
    },
  ];
  const PartyTimeTech = [
    {
      name: "TypeScript",
      icon: <SiTypescript color={"#007acc"} />,
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
      name: "CSS",
      icon: <SiCss3 color={"#2464F0"} />,
    },
    {
      name: "GIT",
      icon: <SiGit color={"black"} />,
    },
  ];
  return (
    <div className="flex flex-col items-center mx-auto min-h-screen max-w-[1280px] mt-28 px-5">
      <Title />
      <ProjectCard
        title="DashWash"
        role="Full Stack"
        thumbnail="/images/DashWash/0.png"
        description={
          "A web-based dashboard designed for users to book laundry machines"
        }
        technologies={DashWashTech}
      />
      <ProjectCard
        title="Yelp AI Chatbox"
        role="UI/UX"
        thumbnail="/images/YelpChatbox/0.png"
        description={
          "A usability study for a Yelp chatbox to aid business navigation."
        }
        technologies={YelpChatBoxTech}
      />
      <ProjectCard
        title="RateMyStudySpot"
        role="Full Stack"
        thumbnail="/images/RateMyStudySpot/0.png"
        description={
          "A website focused on helping students explore study spots."
        }
        technologies={RateMyStudySpotTech}
      />
      <ProjectCard
        title="PartyTime"
        role="Frontend"
        thumbnail="/images/PartyCalculator/0.png"
        description={
          "An application for helping students split food and drink costs for parties."
        }
        technologies={PartyTimeTech}
      />
    </div>
  );
}

export default function Home() {
  return <HomePage />;
}

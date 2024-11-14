import Title from "@/components/homepage/Title";
import ProjectCard from "@/components/homepage/ProjectCard";

function HomePage() {
  return (
    <div className="flex flex-col items-center mx-auto min-h-screen max-w-[1280px] mt-28 px-5">
      <Title />
      <ProjectCard tags={["PostGresSQL", "React", "Figma", "TypeScript"]} />
      <ProjectCard tags={["PostGresSQL", "React", "Figma", "TypeScript"]} />
      <ProjectCard tags={["PostGresSQL", "React", "Figma", "TypeScript"]} />
    </div>
  );
}

export default function Home() {
  return <HomePage />;
}

import Link from "next/link";
import projectInfo from "./projectInfo";
import ProjectCard from "./ProjectCard";

export default function Home() {
  return (
    <main>
      <h1>Sample</h1>
      {projectInfo.map(project => (
        <ProjectCard key={project.id} id={project.id} name={project.name} url={project.url}/>
      ))}
    </main>
  );
}
